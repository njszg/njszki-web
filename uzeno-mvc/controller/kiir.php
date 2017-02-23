<?php

    include_once('../model/Uzeno.php');

    $uzeno = new Uzeno();
    $uzenetek = $uzeno->listaz();

    include('../view/kiir.php');

?>

