// inicializálás

function ures(){
	return {
		ures: true
	};
}

function babu(szin, figura){
	return {
		ures: false,
		szin: szin,
		figura: figura
	};
}

function b(str){
	if(str.trim() == "") return ures();
	
	return {
		ures: false,
		szin: szin(str[0]),
		figura: figura(str[1])
	};
}

function szin(s){
	if(s == "v") return "vilagos";
	else "sotet";
}

function figura(f){
	switch(f){
		case "B": return "bastya"; break;
		case "H": return "huszar"; break;
		case "F": return "futo"; break;
		case "V": return "vezer"; break;
		case "K": return "kiraly"; break;
		case "G": return "gyalog"; break;
	}
}

var sakk = {
	lep: "vilagos",
	mezok: {
		'a': [null, babu('vilagos', 'bastya'),babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','bastya')],
		'b': [null, babu('vilagos', 'huszar'),babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','huszar')],
		'c': [null, babu('vilagos', 'futo')  ,babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','futo')],
		'd': [null, babu('vilagos', 'vezer') ,babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','vezer')],
		'e': [null, babu('vilagos', 'kiraly'),babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','kiraly')],
		'f': [null, babu('vilagos', 'futo'),  babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','futo')],
		'g': [null, babu('vilagos', 'huszar'),babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','huszar')],
		'h': [null, babu('vilagos', 'bastya'),babu('vilagos','gyalog'),ures(),ures(),ures(),ures(), babu('sotet','gyalog'), babu('sotet','bastya')]
	}
}

function lep(sakk, lepes){
	if('a' <= lepes[0] && lepes[0] <= 'h' && '1' <= lepes[1] && lepes[1] <= '8'){
		if(sakk.lep == "vilagos"){
			var oszlop = lepes[0];
			var sorhova = parseInt(lepes[1], 10);
			var van = false;
			
			for(var sor=2;sor<8;sor++){
				if(sakk.mezok[oszlop][sor].figura == "gyalog"){
					van = true;
					break;
				}
				console.log(oszlop, sor, sakk.mezok[oszlop][sor]);
			}

			if(van){
				if(sor == 2){
					if(sorhova == 3 || sorhova == 4){
						sakk.mezok[lepes[0]][2] = b('  ');
						sakk.mezok[lepes[0]][lepes[1]] = b('vG');
						sakk.lep = "sotet";
						return sakk;
					} else {
						return {
							hiba: 'Szabálytalan lépés.',
							kod: 1
						};
					}
				} else {
					if(sorhova == sor+1){
						sakk.mezok[lepes[0]][2] = b('  ');
						sakk.mezok[lepes[0]][lepes[1]] = b('vG');
						sakk.lep = "sotet";
						return sakk;
					} else {
						return {
							hiba: 'Szabálytalan lépés.',
							kod: 2
						};
					}
				}
				
			} else {
				return {
					hiba: 'Szabálytalan lépés.',
					kod: 3
				};
			}
			
			
			
			
			
		} else {
			return sakk;
		}
	} else {
		return {
			hiba: 'Szabálytalan lépés.',
			kod: 4
		};
	}
}
