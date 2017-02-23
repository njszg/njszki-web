<?php
    include('../model/Uzeno.php');

    // kaptam-e adatot a formról?
    if(isset($_POST['nev']) && isset($_POST['uzenet'])){
        // ha igen, akkor feldolgozom
        $uzeno = new Uzeno();
        $uzeno->kuld($_POST['nev'], $_POST['uzenet'], time());
        header('Location: kiir.php');
    } else {
        // ha nem, akkor kiírom az űrlapot
        include('../view/kuld.php');
    }
?>

