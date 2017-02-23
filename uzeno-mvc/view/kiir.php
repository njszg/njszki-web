<html>
<head>
    <title>Üzenetek kiírása</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
<h1>Üzenetek kiírása</h1>

<p>
    <a href="kuld.php">Új üzenet küldése</a>
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
