<?php

	header('Content-type: application/json');
	
	$suits = Array('heart', 'diamond', 'spade', 'club');
	$cards = Array('2','3','4','5','6','7','8','9','10','jack','queen','king','ace');
	
	function randomFrom($arr){
		$n = count($arr);
		$r = rand(0,$n-1);
		return $arr[$r];
	}
	
	$result = Array(
		'suit' => randomFrom($suits),
		'card' => randomFrom($cards)
	);
	
	//while(true){};
	
	echo json_encode($result);

?>