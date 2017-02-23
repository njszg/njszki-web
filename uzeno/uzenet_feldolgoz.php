<?php
    if(isset($_POST['nev']) && isset($_POST['uzenet'])){
        $nev = $_POST['nev'];
        $uzenet = $_POST['uzenet'];
        $mikor = time();

        eltarol($nev, $uzenet, $mikor);

        header('Location: uzenet_kiir.php');
    }



    function eltarol($nev, $uzenet, $mikor){
        $conn = mysql_connect('localhost', 'root', '');
        if(!$conn){
            die('No connection: '.mysql_error());
        }

        $select = mysql_select_db('estiokj', $conn);
        if(!$select){
            die('No db selected: '.mysql_error());
        }

        $result = mysql_query('SET NAMES utf8;', $conn);
        if(!$result){
            die('Charset failed: '.mysql_error());
        }

        $result = mysql_query(
            "INSERT INTO uzenetek (nev, uzenet, mikor) ".
            "VALUES ('$nev', '$uzenet', '$mikor');"
            , $conn);

        if(!$result){
            die('Cannot insert: '.mysql_error());
        }

        $close = mysql_close($conn);
        if(!$close){
            die('Cannot close: '.mysql_error());
        }

    }
?>

