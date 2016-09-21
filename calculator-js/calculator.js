function szam(n){
	if(document.getElementById('mezoMuvelet').value == ''){
		document.getElementById('mezo1').value += n;
	} else {
		document.getElementById('mezo2').value += n;
	}
}


function muvelet(muv){
	document.getElementById('mezoMuvelet').value = muv;
	
}

function eredmeny(){
	var a = parseInt(document.getElementById('mezo1').value, 10);
	var b = parseInt(document.getElementById('mezo2').value, 10);
	var muv = document.getElementById('mezoMuvelet').value;
	var ered;
	
	switch(muv){
		case '+':
			ered = a+b;
			break;
		
		case '-':
			ered = a-b;
			break;

		case '*':
			ered = a*b;
			break;

		case '/':
			ered = a/b;
			break;
	}
	
	document.getElementById('mezoEredmeny').value = ered;
}

function torolMind(){
	document.getElementById('mezo1').value = '';	
	document.getElementById('mezo2').value = '';	
	document.getElementById('mezoMuvelet').value = '';	
	document.getElementById('mezoEredmeny').value = '';	
}
