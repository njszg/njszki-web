<?php

    include('model/inputCheck.php');
    include('model/add.php');

    // 1. user input validálás

    $szam1 = $_POST['szam1'];
    $szam2 = $_POST['szam2'];

    if(!(InputCheck::isNumber($szam1) && InputCheck::isNumber($szam2))){
        die('Nem számok!');
    }

    // 2. művelet az adatokkal

    $szamEredmeny = Add::two($szam1, $szam2);

    // 3. betöltöm a megfelelő view-t

    include('view.php');

?>
