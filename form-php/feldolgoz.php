<?php
  session_start();
  
  include_once('db.php');
  
  if(isset($_SESSION['username'])){
    echo "Siker sessionbol: ${_SESSION['username']}";
  } else {

    if(isset($_POST['username']) && isset($_POST['password'])){
      
      $db = new DB();
      
      $username = $db->escape($_POST['username']);
      $password = $db->escape($_POST['password']);
      
      $result = $db->query("SELECT * FROM login WHERE username = '$username' AND password = MD5('$password');");
      
      if(count($result) === 1){
        echo "Siker: $username";
        $_SESSION['username'] = $username;
      } else {
        echo "Kudarc";
      }
      
      $db->close();
      
    } else {
      header("Location: /urlap.php \n");
    }
  
  }
  
?>