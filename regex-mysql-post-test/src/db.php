<?php

    class DB{
        private static $instance = null;
        var $host = 'localhost';
        var $user = 'root';
        var $password = '';
        var $database = 'test';
        var $connection = null;

        private function __construct(){}

        public static function getInstance(){
            if(!static::$instance) {
                static::$instance = new DB();
            }
            return static::$instance;
        }

        public function connect(){
            $this->connection = mysql_connect($this->host, $this->user, $this->password);
            if(!$this->connection){
                throw new Exception("MySQL: Connection error: ".mysql_error());
            }

            $result = mysql_select_db($this->database, $this->connection);
            if(!$result){
                throw new Exception("MySQL: Select DB error: ".mysql_error());
            }

            $result = mysql_set_charset("utf8", $this->connection);
            if(!$result){
                throw new Exception("MySQL: Set charset error: ".mysql_error());
            }
        }

        public function query($queryString){
            if(!$this->connection){
                throw new Exception("MySQL: Not opened, cannot query error: ".mysql_error());
            }

            $result = mysql_query($queryString, $this->connection);
            if(!$result){
                throw new Exception("MySQL: Query error: ".mysql_error());
            }

            if(gettype($result) !== 'boolean'){
                $rows = Array();
                while($record = mysql_fetch_assoc($result)){
                    $rows[] = $record;
                }

                return $rows;
            }
        }

        public function close(){
            if(!$this->connection){
                throw new Exception("MySQL: Not opened, cannot close error: ".mysql_error());
            }

            $result = mysql_close($this->connection);
            if(!$result){
                throw new Exception("MySQL: Close error: ".mysql_error());
            }
        }
    }

?>
