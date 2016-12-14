<!doctype html>
<html>
    <head>
        <title>Login example</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <?php
            if($login->getLoginResult() === true) {
                print "Sikeres bejelentkezés";
            } elseif ($login->getLoginResult() === false) {
                print "Sikertelen bejelentkezés";
            } else {
                // nem történt semmilyen bejelentkezés
            }
        ?>
        <hr />
        <?php
            if($login->hasUser()){
                print $login->getUser()." be van jelentkezve.";
            } else {
                print "Nincs bejelentkezve senki.";
            }
        ?>
        <hr />
        <form action="" method="post">
            <input type="text" name="username" /><br />
            <input type="password" name="password" /><br />
            <input type="submit" name="login" value="Bejelentkezés!" />
            <input type="submit" name="logout" value="Kijelentkezés!" />
        </form>
    </body>
</html>
