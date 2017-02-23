<html>
<head>
    <title>Üzenet küldése</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
    <h1>Üzenet küldése</h1>
    <form action="uzenet_feldolgoz.php" method="post">
        <p>
            Név:<br />
            <input type="text" name="nev" />
        </p>

        <p>
            Üzenet:<br />
            <textarea name="uzenet"></textarea>
        </p>

        <p>
            <input type="submit" value="Küld!" />
        </p>
    </form>
</body>
</html>
