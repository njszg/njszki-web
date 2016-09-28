<?php
  // Controller
  // Vezérlõ, õ irányítja, hogy a user történései
  // (http kérések) alapján mi történjen 
  
  // beállítom, hogy egyszerû szöveget adjon
  // vissza a php és ne html-t
  header("Content-type: text/plain\n");

  // 1. felhasználom a user inputjait, és szükség esetén validálom
  $userChoosed = $_GET['what'];
  
  // 2. használom a kapcsolódó model osztályt 
  // és annak egy (vagy több) objektumát
  
  // 2a. include-dal hivatkozom a kódra
  // ha _once, akkor csak egyszer hivatkozható
  include_once('../model/rpsModel.php');

  // 2b. létrehozok egy model objektumot, és használom
  $rps = new RPS($userChoosed);
  $results = $rps->getResults();

  // 3. include-dal megjelenítem azt a view-t, amit vissza akarok küldeni
  // a felhasználónak  
  include('../view/rpsView.php');
?>
