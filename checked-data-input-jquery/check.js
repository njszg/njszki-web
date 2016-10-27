$(document).ready(function(){
	$('#name-valid').show();
	$('#name-invalid').hide();
});

function check(){
	var text = $('#input-name').val();
	var regEx = /^\d*$/i;

	if(text.match(regEx)){
		console.log("Ez egy szám!", text);
		$('#name-valid').show();
		$('#name-invalid').hide();
		$('#input-submit').prop('disabled', false);
	} else {
		console.log("Ez nem szám!", text);
		$('#name-valid').hide();
		$('#name-invalid').show();
		$('#input-submit').prop('disabled', true);
	}
}
