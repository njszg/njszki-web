<?php

    include_once('db.php');

    class Table {
        var $tableName;
        var $db;

        function __construct($tableName){
            $this->tableName = $tableName;
            $this->db = DB::getInstance();
        }

        function get($id){
            $this->db->connect();
            $rows = $this->db->query("SELECT * FROM $this->tableName WHERE id = $id;");
            $this->db->close();

            if(count($rows) > 1) {
                throw new Exception("Multiple ID error.");
            } else if(count($rows) == 0){
                return false;
            } else {
                return $rows[0];
            }
        }

        function insert($record){
            $this->db->connect();
            $rows = $this->db->query("INSERT INTO $this->tableName (name) VALUES ('${record['name']}');");
            $this->db->close();
        }

        function delete($id){
            $this->db->connect();
            $rows = $this->db->query("DELETE FROM $this->tableName WHERE id = $id LIMIT 1;");
            $this->db->close();
        }

        function update($id, $record){
            $this->db->connect();
            $rows = $this->db->query("UPDATE $this->tableName SET name = '${record['name']}' WHERE id = $id LIMIT 1;");
            $this->db->close();
        }

        function drop(){
            $this->db->connect();
            $this->db->query("DROP TABLE IF EXISTS $this->tableName;");
            $this->db->close();
        }

        function create(){
            $this->db->connect();
            $this->db->query("CREATE TABLE IF NOT EXISTS $this->tableName (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(16));");
            $this->db->close();
        }
    }

?>
