<?php
  if(isset($_POST['egyik']) && $_POST['masik']){
    $szam1 = $_POST['egyik'];
    $szam2 = $_POST['masik'];
    
    $prim_tenyezok1 = primTenyezo($szam1);
    $prim_tenyezok2 = primTenyezo($szam2);
    
    $kozos_tenyezok = kozosTenyezo($prim_tenyezok1, $prim_tenyezok2);
    
    $lnko = szoroz($kozos_tenyezok);
  }
  
  function primTenyezo($szam){
    $tenyezok = Array();
    $n = $szam;
    $oszto = 2;
    while($n > 1){
      if($n%$oszto == 0){
        $tenyezok[] = $oszto;
        $n /= $oszto;
      } else {
        $oszto++;
      }
    }
    return $tenyezok; 
  }
  
  function kozosTenyezo($lista1, $lista2){
    $i=0;
    $j=0;
    $kozos = Array();
    
    while($i < count($lista1) && $j < count($lista2)){
      if($lista1[$i] == $lista2[$j]){
        $kozos[] = $lista1[$i];
        $i++; $j++;
      } elseif ($lista1[$i] < $lista2[$j]) {
        $i++;
      } else {
        $j++;
      }
    }
    
    return $kozos;
  }
  
  function szoroz($lista){
    $q = 1;
    for($i=0;$i<count($lista);$i++){
      $q *= $lista[$i];
    }
    return $q;    
  }
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>LNKO</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>

<form action="" method="post">
  Egyik szám: <input type="text" name="egyik" /><br />
  Másik szám: <input type="text" name="masik" /><br />
  <input type="submit" value="Számolj LNKO-t!" />
</form>

<hr />

Az egyik szám, amit megadtál: <?=$szam1?>, prímtényezői <?=implode('*',$prim_tenyezok1)?><br />
A másik szám, amit megadtál: <?=$szam2?>, prímtényezői <?=implode('*',$prim_tenyezok2)?><br />
A legNagyobb Közös Osztójuk a <?=$lnko?>. (<?=implode('*',$kozos_tenyezok)?>)  
  </body>
</html>
