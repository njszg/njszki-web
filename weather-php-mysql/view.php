<html>
  <head>
    <title>Időjárás</title>
    <meta charset="utf-8" />
    <link href="view.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
<?php

  include('db.php');
  header('Content-Type: text/html; charset=utf-8');

  $db = new DB("dolgozat");

  if(isset($_POST['hely'])){

    $hely = $db->escape($_POST['hely']);
    $rows = $db->query("SELECT * FROM idojaras WHERE hely = '$hely';");

  }

?>

<div id="main">

  <form action="" method="post">
    <select name="hely" size="1">
<?php
  $places = $db->query("SELECT DISTINCT hely FROM idojaras ORDER BY hely ASC;");
  foreach($places as $place){
?>
      <option name="hely" value="<?=$place['hely']?>" <?=($place['hely'] == $_POST['hely']?'selected="selected"':'')?>><?=$place['hely']?></option>
<?php
  }
?>
    </select>
    <input type="submit" value="Mutasd!" />
  </form>


<?php
  if(isset($rows)){
?>
  <div id="whichPlace"><?=$hely?> időjárása</div>
<?php
    foreach($rows as $row){
?>
  <div class="day">
    <div class="dayName"><?=$row['nap']?></div>
    <div class="midday"><?=$row['delben']?>°C</div>
    <div class="midnight"><?=$row['ejjel']?>°C</div>
    <div class="weather-pic"><img src="<?=$row['idojaras']?>.png" alt="<?=$row['idojaras']?>" /></div>
    <div class="weather"><?=$row['idojaras']?></div>
  </div>
<?php
    }

  }
  $db->close();
?>
</div>

  </body>
</html>

