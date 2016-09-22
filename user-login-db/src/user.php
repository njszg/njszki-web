<?php
  require_once('db.php');

  class User{
    
    // létrehoz egy új user objektumot, amivel a felhasználóval
    // kapcsolatos műveleteket végezzük majd
    
	  function __construct(){
		  $this->user = null;
	  }
    
    // bejelentkezteti a felhasználót, és a $this->user -be 
    // eltárolja a nevet, amennyiben sikeres volt
	  
	  function login($user, $password){
		  if($this->checkUserPass($user, $password)){
        $this->user = $user;
        return true;
		  } else {
        return false;
		  }
	  }
    
    // visszaadja, hogy történt-e már sikeres bejelentkezés
	  
	  function isLoggedIn(){
		  return ($this->user);
	  }
    
    // ellenőrzi az adatbázis alapján, hogy létezik-e a felhasználónév
    // jelszó páros az adatbázisban (pontosan egy sorban)
	  
    private function checkUserPass($user, $password){
      $queryString = "SELECT * FROM user ".
        "WHERE name = '".$user."' ".
        "AND password = MD5('".$password."') ".
        ";";
      
      return (DB::justCount($queryString) === 1);
    }
  }
?>
