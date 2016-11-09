<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Összeadás</title>
    </head>
    <body>

        <form action="controller.php" method="post">
            <input type="text" name="szam1" />
            +
            <input type="text" name="szam2" />
            <input type="submit" value="=" />
            <?=$szamEredmeny?>
        </form>

    </body>
</html>
