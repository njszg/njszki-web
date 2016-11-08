<?php
    require_once('../src/table.php');

    class TestTable extends UnitTestCase {

        var $tableName = 'test';

        function setUp(){
            $db = DB::getInstance();
            $db->connect();
            $db->query("DROP TABLE IF EXISTS test;");
            $db->query("CREATE TABLE test (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(16));");
            $db->close();
        }

        function testTableInsertGet() {
            $table = new Table($this->tableName);
            $table->insert(Array("name" => "Zsolt"));
            $row = $table->get(1);

            UnitTestCase::assertEqual("Zsolt", $row["name"]);
            UnitTestCase::assertEqual(1, $row["id"]);
        }

        function testTableDelete() {
            $table = new Table($this->tableName);
            $table->insert(Array("name" => "Zsolt"));
            $table->delete(1);
            $row = $table->get(1);

            UnitTestCase::assertIdentical(false, $row);
        }

        function testTableUpdate() {
            $table = new Table($this->tableName);
            $table->insert(Array("name" => "Zsolt"));
            $table->update(1, Array("name" => "Zoli"));
            $row = $table->get(1);

            UnitTestCase::assertEqual("Zoli", $row["name"]);
            UnitTestCase::assertEqual(1, $row["id"]);
        }

        function testTableDrop() {
            try{
                $table = new Table($this->tableName);
                $table->drop();
                $row = $table->get(1);

                $this->fail("Expected exception");
            } catch (Exception $ex) {
                $this->pass();
            }
        }

        function testTableCreate() {
            $table = new Table($this->tableName);
            $table->drop();
            $table->create();
            $table->insert(Array("name" => "Zsolt"));
        }
    }
?>
