<?php

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
        "SELECT * FROM uzenetek;"
        , $conn);

    if(!$result){
        die('Cannot insert: '.mysql_error());
    }

    $uzenetek = array();
    while($sor = mysql_fetch_assoc($result)){
        $uzenetek[] = $sor;
    }

    $close = mysql_close($conn);
    if(!$close){
        die('Cannot close: '.mysql_error());
    }


?>


<html>
<head>
    <title>Üzenetek kiírása</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
    <h1>Üzenetek kiírása</h1>

    <p>
        <a href="uzenet_kuld.php">Új üzenet küldése</a>
    </p>

    <table border="1">
        <?php foreach($uzenetek as $uzenet) : ?>
        <tr>
            <td>[<?=date("Y.m.d. H:i:s", $uzenet['mikor'])?>]</td>
            <td><?=$uzenet['nev']?>:</td>
            <td><?=$uzenet['uzenet']?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
