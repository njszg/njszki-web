<?php
    session_start();
    // Bejelentkezés törlése
    $_SESSION['username'] = null;
    // Visszairányítás
    header("Location: user-submit.php");
?>

