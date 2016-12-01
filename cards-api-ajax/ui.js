function suitToSymbol(suit){
	switch(suit){
		case 'heart':   return '♥';
		case 'spade':   return '♠';
		case 'club' :   return '♣';
		case 'diamond': return '♦';
		default:        return '?';
	}
}

function suitToColor(suit){
	return (suit == 'heart' || suit == 'diamond')?'red':'black';
}

function cardToLetter(card){
	switch(card){
		case 'ace':    return 'A';
		case 'king':   return 'K';
		case 'queen' : return 'Q';
		case 'jack':   return 'J';
		case '10':	   return '10';
		default:       return card;
	}
}

function cardToPoints(card){
	switch(card){
		case 'ace':    return 11;
		case 'king':   return 10;
		case 'queen' : return 10;
		case 'jack':   return 10;
		default:       return parseInt(card, 10);
	}
}

var points = 0;

function getCard(){
	$.ajax('/api.php', {
		success: insertCard,
		error: errorCard
	});
}

function insertCard(data){
	var newCard = $('<div></div>')
		.addClass('card')
		.addClass(suitToColor(data.suit))
		.html(suitToSymbol(data.suit)+"<br />"+cardToLetter(data.card));
	$('#cardHolder')
		.append(newCard);
	
	points += cardToPoints(data.card);
	$('#points').text(points);
	
	if(points > 21){
		$('#loser').text('You are a loser!');
	}
};

function errorCard(jqXHR, textStatus, errorThrown ){
	alert('error happened');
};	
