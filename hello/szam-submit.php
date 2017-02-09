<?php
    session_start();

    if(isset($_POST['szam1']) && isset($_POST['szam2'])){
        $szam1 = $_POST['szam1'];
        $szam2 = $_POST['szam2'];

        if(!is_numeric($szam1) || !is_numeric($szam2)){
            echo "Valamelyik nem szám!";
        } else if ($szam1 == $szam2) {
            echo "Egyenlőek";
        } else if ($szam1 > $szam2) {
            echo "Első nagyobb";
        } else {
            echo "Második nagyobb";
        }

        if(!isset($_SESSION['szamlal'])){
            $_SESSION['szamlal'] = 0;
        }

        $_SESSION['szamlal']++;

        echo "<br />";

        echo 'Eddig '.$_SESSION['szamlal'].' összehasonlítás történt.';

        echo "<br /><a href='szam-submit.php'>Vissza</a>";
    } else {
        include 'szam-form.php';
    }
?>

