// megjelenítés

function babuMegjelenit(mezo){
	if(mezo.ures) return "";
	
	if(mezo.szin == 'vilagos'){
		switch(mezo.figura){
			case 'bastya': return '♖'; break;
			case 'huszar': return '♘'; break;
			case 'futo':   return '♗'; break;
			case 'vezer':  return '♕'; break;
			case 'kiraly': return '♔'; break;
			case 'gyalog': return '♙'; break;
		}
	} else {
		switch(mezo.figura){
			case 'bastya': return '♜'; break;
			case 'huszar': return '♞'; break;
			case 'futo':   return '♝'; break;
			case 'vezer':  return '♛'; break;
			case 'kiraly': return '♚'; break;
			case 'gyalog': return '♟'; break;
		}
	}
}

function megjelenit(sakk){
	for(var i in sakk.mezok){
		for(var j in sakk.mezok[i]){
			if(j == 0)continue;
			$("#"+i+j).text(babuMegjelenit(sakk.mezok[i][j]));
		}
	}
}










// kezdeti kirajzolás

$(document).ready(function(){
	var sornev = ['h','g','f','e','d','c','b','a'];
	
	var tabla = $("#tabla");
	
	for(var i=0;i<8;i++){
		var sor = $("<div></div>");
		sor.addClass("sor");
		tabla.append(sor);
		
		for(var j=0;j<8;j++){
			var mezo = $("<div></div>");
			mezo.addClass("mezo");
			mezo.addClass((i+j)%2==0?"feher":"fekete");
			mezo.attr("id", sornev[j]+(i+1));
			//mezo.text(sornev[j]+(i+1));
			sor.append(mezo);
		}	
	}
	
	megjelenit(sakk);
});
