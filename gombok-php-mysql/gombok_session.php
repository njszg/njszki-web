<?php
  session_start();

  // számlálók inicializálása nullára
  if(!isset($_SESSION['piros'])) $_SESSION['piros'] = 0;
  if(!isset($_SESSION['zold' ])) $_SESSION['zold' ] = 0;
  if(!isset($_SESSION['kek'  ])) $_SESSION['kek'  ] = 0;
  
  // volt gomb megnyomva?
  if(isset($_POST['gomb'])) {
    $gomb = $_POST['gomb'];

    // melyiket nyomták meg?
    if($gomb == 'Piros!'){
      $_SESSION['piros']++;
    } elseif($gomb == 'Zöld!'){
      $_SESSION['zold']++;      
    } elseif($gomb == 'Kék!'){
      $_SESSION['kek']++;
    }
  }
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>Gomb számláló</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>

    <form action="" method="post">
      <input type="submit" name="gomb" value="Piros!" />
      <input type="submit" name="gomb" value="Zöld!" />
      <input type="submit" name="gomb" value="Kék!" />
    </form>

    <div>
      <div><?=$_SESSION['piros']?></div>
      <div><?=$_SESSION['zold']?></div>
      <div><?=$_SESSION['kek']?></div>
    </div>

  </body>
</html>