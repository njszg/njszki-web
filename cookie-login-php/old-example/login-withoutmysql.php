<?php
    print "POSTS";
    print_r($_POST);
    print "<br />";
    print "COOKIES";
    print_r($_COOKIE);
    print "<hr />";

    $user = null;

    if(isset($_POST['login'])) {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            if ($_POST['username'] == "Zsolt" && $_POST['password'] == "almafa") {
                setcookie("logintoken", "almafa", 0);
                print("Posztból jött.");
                $user = "Zsolt";
            }
        }
    }

    if(!$user && isset($_COOKIE['logintoken'])){
        if($_COOKIE['logintoken'] == 'almafa'){
            print("Sütiből jött.");
            $user = "Zsolt";
        }
    }

    if(isset($_POST['logout'])) {
        print(" Logout volt.");
        $user = null;
        setcookie("logintoken", "", time()-1);
    }

    print "<hr />";
    if($user){
        print $user." be van jelentkezve.";
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

