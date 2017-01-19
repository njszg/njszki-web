<?php
	header('Content-type: text/html; charset=utf-8');

	$inputFile = fopen('almafa.csv', 'r');
	$inputArray = Array();
	while(!feof($inputFile)){
		$row = fgets($inputFile);
		$row = explode(";", $row);
		$inputArray[] = $row;
	}
	fclose($inputFile);
	
	echo '<table border="1">';
	foreach($inputArray as $row){
		echo "<tr>";
		foreach($row as $elem){
			echo "<td>".$elem."</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
	
	$outputFile = fopen('kortefa.csv', 'w');
	foreach($inputArray as $row){
		fputs($outputFile, implode(";", $row));
	}
	fclose($outputFile);
?>
