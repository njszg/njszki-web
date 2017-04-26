function paros(n){
	if(!isNumeric(n))return NaN;	
	return n%2==0;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}