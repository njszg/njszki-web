<?php
    include('./model/cookieLogin.php');

    $login = new CookieLogin();
    $login->tryLogin(
        isset($_POST['login'])?$_POST['login']:null,
        isset($_POST['logout'])?$_POST['logout']:null,
        isset($_POST['username'])?$_POST['username']:null,
        isset($_POST['password'])?$_POST['password']:null,
        isset($_COOKIE['logintoken'])?$_COOKIE['logintoken']:null
    );

    include('./view/loginView.php');
?>
