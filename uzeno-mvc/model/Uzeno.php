<?php
    include_once('DB.php');

    class Uzeno{
        private $db;

        function __construct(){
            // DB classból a getInstance függvényt statikusan meghívjuk
            $this->db = DB::getInstance();
        }

        function kuld($nev, $uzenet, $mikor){
            $this->db->connect();

            $this->db->query("INSERT INTO uzenetek (nev, uzenet, mikor) ".
                "VALUES ('$nev', '$uzenet', '$mikor');");

            $this->db->close();
        }

        function listaz(){
            $this->db->connect();

            $ret = $this->db->query("SELECT * FROM uzenetek;");

            $this->db->close();

            return $ret;
        }
    }

?>

