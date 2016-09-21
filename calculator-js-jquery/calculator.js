function szam(n){
	if($('#mezoMuvelet').val() == ''){
		$('#mezo1').val($('#mezo1').val()+n);
	} else {
		$('#mezo2').val($('#mezo2').val()+n);
	}
}


function muvelet(muv){
	$('#mezoMuvelet').val(muv);
	
}

function eredmeny(){
	var a = parseInt($('#mezo1').val(), 10);
	var b = parseInt($('#mezo2').val(), 10);
	var muv = $('#mezoMuvelet').val();
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
	
	$('#mezoEredmeny').val(ered);
}

function torolMind(){
	$('#mezo1').val('');	
	$('#mezo2').val('');	
	$('#mezoMuvelet').val('');	
	$('#mezoEredmeny').val('');	
}
