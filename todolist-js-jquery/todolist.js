function add(){
	// beírt szöveg az inputba
	var inputText = $('#newTodo').val();
	
	// input mező kiürítése
	$('#newTodo').val('');
	
	// a lista div, amibe pakolni fogunk
	var list = $('#list');
	
	// új div létrehozása
	var newElement = $('<div></div>');

	// új szöveg létrehozása (a divbe fogjuk belerakni)
	newElement.text(inputText);
	
	// jelölőnégyzet létrehozása
	// <input type="checkbox" />
	var newCheckBox = $('<input type="checkbox" />');

	// új kattintás esemény létrehozása
	newCheckBox.on('click', function(e){
		if(newCheckBox.is(':checked')) {
			// ha be van pipálva - áthúzás
			newElement.css('text-decoration', "line-through");
		} else {
			// ha nincs bepipálva - nincs dekoráció
			newElement.css('text-decoration', "none");
		}
	});
	
	// beilleszti a most létrehozott HTML elemeket a már létező HTML fába
	list.append(newElement);
	newElement.prepend(newCheckBox);
	
};

// ide az kerül, amit a legelején szeretnél futtatni
// amihez kell a HTML fa, akkor fut le, amikor a böngésző kirajzolta már a HTML-t
$(document).ready(function(){
	
});










