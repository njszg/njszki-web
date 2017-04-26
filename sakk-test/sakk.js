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
	var honnan = lepes[0];
	var hova = lepes[1];
	
	if(!mezoE(honnan)) return {kod: 1, hiba: 'Szabálytalan honnan mező.'};
	if(!mezoE(hova)) return {kod: 2, hiba: 'Szabálytalan hova mező.'};
	
	var honnanOszlop = honnan[0];
	var honnanSor = honnan[1];
	var hovaOszlop = hova[0];
	var hovaSor = hova[1];
	var honnanFigura = sakk.mezok[honnanOszlop][honnanSor].figura;
	
	switch(honnanFigura){
		
		case 'bastya':
			if(!(vizszintesE(honnan, hova) || fuggolegesE(honnan, hova))){
				return {kod: 21, hiba: 'Szabálytalan bástya lépés.'};
			}
		break;	
		
		case 'futo':
			if(!(atlosE(honnan, hova))){
				return {kod: 31, hiba: 'Szabálytalan futó lépés.'};
			}
		break;	
		
		case 'vezer':
			if(!(vizszintesE(honnan, hova) || fuggolegesE(honnan, hova) || atlosE(honnan, hova))){
				return {kod: 41, hiba: 'Szabálytalan vezér lépés.'};
			}
		break;	
		
		case 'huszar':
			if(!(ugrasE(honnan, hova))){
				return {kod: 51, hiba: 'Szabálytalan huszár lépés.'};
			}
		break;	
		
		case 'kiraly':
			if(!(szomszedosE(honnan, hova) || sancE(honnan, hova, sakk))){
				return {kod: 61, hiba: 'Szabálytalan király lépés.'};
			}
			
			if(sancE(honnan, hova, sakk)) {
				// bástyát kéne léptetni
				if(hova == "g1"){
					var babu2 = sakk.mezok['h'][1];
					sakk.mezok['f'][1] = babu2;
					sakk.mezok['h'][1] = b('  ');
				} else { // "c1"
					var babu2 = sakk.mezok['a'][1];
					sakk.mezok['d'][1] = babu2;
					sakk.mezok['a'][1] = b('  ');
				}
			}
		break;	

	}
	
	var babu = sakk.mezok[honnanOszlop][honnanSor];
	sakk.mezok[hovaOszlop][hovaSor] = babu;
	sakk.mezok[honnanOszlop][honnanSor] = b('  ');
	sakk.lep = 'sotet';
	
	return sakk;
	
	
}

var Oszlop = 0;
var Sor = 1;

function vizszintesE(honnan, hova){
	return (honnan[Oszlop] == hova[Oszlop]);
};

function fuggolegesE(honnan, hova){
	return (honnan[Sor] == hova[Sor]);
};

function atlosE(honnan, hova){
	return (
		Math.abs(ord(honnan[Oszlop])-ord(hova[Oszlop])) 
		== Math.abs(honnan[Sor]-hova[Sor])
	);
};

function ugrasE(honnan, hova){
	var oszlopDiff = Math.abs(ord(honnan[Oszlop])-ord(hova[Oszlop])); 
	var sorDiff	= Math.abs(honnan[Sor]-hova[Sor]);
	return (
		oszlopDiff*sorDiff == 2 &&
		oszlopDiff+sorDiff == 3
	);
};

function szomszedosE(honnan, hova){
	var oszlopDiff = Math.abs(ord(honnan[Oszlop])-ord(hova[Oszlop])); 
	var sorDiff	= Math.abs(honnan[Sor]-hova[Sor]);
	return (
		oszlopDiff < 2 &&
		sorDiff < 2
	);	
};

function sancE(honnan, hova, sakk){
	// TODO sakkon át
	// TODO léptek-e már
	return (honnan == "e1" && (hova == "g1" || hova == "c1"));
};

function ord(str){
	return str.charCodeAt(0);
};

function mezoE(mezo){
	return ('a' <= mezo[0] && mezo[0] <= 'h' && '1' <= mezo[1] && mezo[1] <= '8');
};

/*
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
*/

