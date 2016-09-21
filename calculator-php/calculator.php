<?php
  if(isset($_POST['szam1']) && 
    isset($_POST['szam2']) && 
	isset($_POST['muvelet'])){
	
    $a = $_POST['szam1'];
    $b = $_POST['szam2'];
    $muvelet = $_POST['muvelet'];
  
    $eredmeny = 0;
    $jel = "";
  
    switch($muvelet){
  	  case 'plusz':
  		$eredmeny = $a + $b;
  		$jel = "+";
  		break;
  		
  	  case 'minusz':
  		$eredmeny = $a - $b;
  		$jel = "-";
  		break;
  		
  	  case 'szor':
  		$eredmeny = $a * $b;
  		$jel = "*";
  		break;

  	  case 'per':
  		$eredmeny = $a / $b;
  		$jel = "/";
  		break;
    }
  
    print $a . " " . $jel . " " . $b . " = " . $eredmeny;
  }
?>

<html>
  <head>
    <title>Számológép</title>
    <meta charset="iso-8859-2" />
  </head>
  <body>
    <form action='' method='post'>
      <input type='text' name='szam1' />
      <select name='muvelet' size='1'>
        <option name='muvelet' value='plusz'>+</option>
        <option name='muvelet' value='minusz'>-</option>
        <option name='muvelet' value='szor'>*</option>
        <option name='muvelet' value='per'>/</option>
      </select>
      <input type='text' name='szam2' />
      <input type='submit' name='' value='Egyenlő' />
    </form>
  </body>
</html>
