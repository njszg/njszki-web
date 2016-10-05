<?php
  // adatbázishoz csatlakozás
  $db = mysql_connect('localhost', 'root', '');
  if(!$db){
    die('Connection error: '.mysql_error());
  }
  
  // adatbázis kiválasztása
  $table = mysql_select_db('almafa', $db);
  if(!$table){
    die('Table selection error: '.mysql_error());
  }
  
  // jelenlegi értékek lekérése (mind3 sor)
  $queryString = "SELECT * FROM gomb;";
  $resultId = mysql_query($queryString, $db);
  if(!$resultId){
    die('Select query error: '.mysql_error());
  }
  
  $gombok = Array();
  
  while($record = mysql_fetch_assoc($resultId)){
    $gombok[$record['szin']] = $record['ertek'];
  }
  
  // volt gomb megnyomva?
  if(isset($_POST['gomb'])) {
    $gomb = $_POST['gomb'];

    // melyiket nyomták meg?
    if($gomb == 'Piros!'){
      $szin = 'piros';
    } elseif($gomb == 'Zöld!'){
      $szin = 'zold';
    } elseif($gomb == 'Kék!'){
      $szin = 'kek';
    } else {
      die('Button error!');
    }
    // érték növelése helyben
    $gombok[$szin]++;
    
    // érték növelése az SQL-ben
    $queryString = "UPDATE gomb SET ertek = ertek + 1 WHERE szin = '$szin';";
    $resultId = mysql_query($queryString, $db);
    if(!$resultId){
      die('Update query error: '.mysql_error());
    }
  }
  
  // SQL bezárása
  $close = mysql_close($db);
  if(!$close){
    die('Close error: '.mysql_error());
  }
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>Gomb számláló</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
    <link href="gombok.css" rel="stylesheet" type="text/css" >
  </head>
  <body>

  <div id="minden">
    <form action="" method="post">
      <input id="piros-gomb" class="gomb" type="submit" name="gomb" value="Piros!" ></input>
      <input id="zold-gomb" class="gomb" type="submit" name="gomb" value="Zöld!" ></input>
      <input id="kek-gomb" class="gomb" type="submit" name="gomb" value="Kék!" ></input>
    </form>

    <div id="szamlalo-doboz">
      <div id="piros-szamlalo" class="szamlalo"><?=$gombok['piros']?></div>
      <div class="koz"></div>
      <div id="zold-szamlalo" class="szamlalo"><?=$gombok['zold']?></div>
      <div class="koz"></div>
      <div id="kek-szamlalo" class="szamlalo"><?=$gombok['kek']?></div>
    </div>
  </div>

  </body>
</html>