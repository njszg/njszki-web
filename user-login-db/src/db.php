<?php
  class DB{
    
    // létrehoz egy új adatbáziskapcsolatot a db.config.php paraméterei alapján
    // kapcsolódik a megfelelõ adatbázishoz és beállítja, hogy utf-8 kódolást használjon
    
	  function __construct(){
      include('db.config.php');
    
      $this->conn = mysql_connect($host, $user, $pass);
      $this->isError($this->conn);
      $db = mysql_select_db($database);
      $this->isError($db);
      $res = mysql_query("SET names utf8;");
      $this->isError($res);
    }
    
    // elvégez egy lekérést és visszaadja az adatokat tömbös tömbben
    
    function query($queryString){
      $res = $this->doQuery($queryString);
      
      $ret = Array();
      while($record = mysql_fetch_assoc($res)){
        $ret[] = $record;
      }      
      return $ret;
    }
    
    // elvégez egy lekérést és csak a visszaadott sorok számát adja vissza
    
    function count($queryString){
      $res = $this->doQuery($queryString);      
      return mysql_num_rows($res);
    }
    
    private function doQuery($queryString){
      $this->isError($this->conn);
      $res = mysql_query($queryString, $this->conn);
      $this->isError($res);
      
      return $res;
    }
    
    // lezárja az adatbáziskapcsolatot
    
    function close(){
      return mysql_close($this->conn);
    }
    
    // hiba kezelés, tetszõleges változó igazságértékét vizsgálja
    // ha hamis, null, stb... akkor hiba történt és lekéri a mysql.tõl
    // az utolsó hibát és dob egy kivételt vele
    
    function isError($p){
      if(!$p){
        throw new Exception('Mysql exception: '.mysql_error());
      }
    }
    
    // statikus metódusok, példányosítás nélkül mûködnek
    // akkor használd, ha csak egyszem sql-t akarsz írni az egész fájlban
    
    // csak megszámolja egy lekérés sorait
    
    static function justCount($queryString){
      return DB::justSomething("count", $queryString);
    }
  
    // csak elvégez egy lekérést és tömbös tömbben visszaadja az eredményt
  
    static function justQuery($queryString){
      return DB::justSomething("query", $queryString);
    }
    
    private static function justSomething($what, $queryString){
      $db = new DB();
      $ret = $db->$what($queryString);
      $db->close();
      return $ret;
    }
  }
?>
