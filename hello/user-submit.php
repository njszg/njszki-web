<?php
    include('login.php');

    session_start();

    // Ha van user eltárolva a session-ben
    if(isset($_SESSION['username'])){
        echo "Üdv sessionből: ".$_SESSION['username'];
        echo "<a href='user-logout.php'>Kilép</a>";
    // Nincs sessionben, de űrlap lett elküldve
    } else if(isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $login = new Login();
        // Jelszó ellenőrzése
        //if ($username == 'Zsiri' && $password == 'almafa') {
        if($login->check($username, $password)) {
            $_SESSION['username'] = $username;
            echo "Üdv ".$username."!";
            echo "<a href='user-logout.php'>Kilép</a>";
        } else {
            echo "Sikertelen bejelentkezés!";
            echo "<a href='user-submit.php'>Újra</a>";
        }
    // Nincs se session, se űrlap (post) data
    } else {
        include 'user-form.php';
    }
?>
