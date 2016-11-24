var matrix = [];
var isXComing = true;
var isAllowedToPut = true;
var size = 12;

$(document).ready(function(){
	generate(size);
});

function generate(n){
	var grid = $('#grid');

	for(var i=0;i<n;i++){
		generateRow(i, n, grid);
	}
}

function generateRow(i, n, grid){
	var tr = $('<tr></tr>');
	grid.append(tr);
	matrix[i] = [];
	
	for(var j=0;j<n;j++){
		generateCell(i, j, tr);
	}
}

function generateCell(i, j, tr){
	var td = $('<td></td>');
	td.text(i+':'+j);
	td.data("i", i);
	td.data("j", j);
	td.data("sign", "");
	td.on('click', tdOnClick);

	tr.append(td);
	matrix[i][j] = td;
}

function tdOnClick(e){
	if(isAllowedToPut && isThisCellEmpty(this)){
		putSign(this);
	}
}

function putSign(that){
	var putSign = isXComing?"X":"O";
	$(that).text(putSign).addClass(putSign).data("sign", putSign);
	checkIfWinning($(that).data("i"), $(that).data("j"), putSign);
	isXComing = !isXComing;
}

function getSign(i, j){
	return matrix[i][j].data("sign");
}

function isSign(i, j, sign){
	return matrix[i][j].data("sign") == sign;
}

function isThisCellEmpty(that){
	return $(that).data("sign") == "";
}

function won(sign){
	isAllowedToPut = false;
	setTimeout(alertWon.bind(null, sign), 100);
}

function alertWon(sign){
	alert(sign+" has won the game.");
}

function checkIfWinning(i, j, sign){
	var dirs = [[1,1],[0,1],[1,0],[1, -1]];
	for(var d=0;d<4;d++){
		if(checkSameSigns(i, j, dirs[d][0], dirs[d][1], sign)){
			won(sign);
		}
	}
}

function checkSameSigns(i, j, iDir, jDir, sign){
	return (checkSameSignsInOneDirection(i, j, iDir, jDir, sign)
		+ checkSameSignsInOneDirection(i, j, -iDir, -jDir, sign)) > 4;
}
	
function checkSameSignsInOneDirection(i, j, iDir, jDir, sign){
	var matches = 0;
	do {
		matches += 1;
		i += iDir;
		j += jDir;
	} while(inBounds(i, j) && isSign(i, j, sign));
	return matches;
}

function inBounds(i,j){
	return (i > -1 && j > -1 && i < size && j < size);
}

function newGame(){
	window.location.reload();
}
