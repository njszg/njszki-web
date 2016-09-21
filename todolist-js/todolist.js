function add(){
	// beírt szöveg az inputba
	var text = document.getElementById('newTodo').value;
	
	// input mező kiüresítése
	document.getElementById('newTodo').value = '';
	
	// a lista div, amibe pakolni fogunk
	var list = document.getElementById('list');
	
	// új div létrehozása
	var newElement = document.createElement("div");

	// új szöveg létrehozása (a divbe fogjuk belerakni)
	var newText = document.createTextNode(text);
	
	// jelölőnégyzet létrehozása
	// <input type="checkbox" />
	var newCheckBox = document.createElement('input');
	newCheckBox.type = 'checkbox';

	// új kattintás esemény létrehozása
	newCheckBox.onclick = function (e){
		if(newCheckBox.checked) {
			// ha be van pipálva - áthúzás
			newElement.style.textDecoration = "line-through";
		} else {
			// ha nincs bepipálva - nincs dekoráció
			newElement.style.textDecoration = "none";
		}
	};
	
	// beilleszti a most létrehozott HTML elemeket a már létező HTML fába
	list.appendChild(newElement);
	newElement.appendChild(newCheckBox);
	newElement.appendChild(newText);
	
	// appendChild - leghátulra teszi
	//prependChild - legelőre
}
