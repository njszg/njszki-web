<?php
    require_once('../src/db.php');

    class TestDB extends UnitTestCase {

        function testDBConstructorIsPrivate() {
            $reflection = new \ReflectionClass('\DB');
            $constructor = $reflection->getConstructor();
            $this->assertTrue($constructor->isPrivate());
        }

        function testDBGettingTheSameInstance() {
            $db1 = DB::getInstance();
            $db2 = DB::getInstance();

            UnitTestCase::assertIdentical($db1, $db2);
        }

        function testDBExceptionWhenNotConnect() {
            try {
                $db = DB::getInstance();
                $db->query("SELECT * FROM tabla;");

                $this->fail("Expected exception");
            } catch (Exception $ex) {
                $this->pass();
            }
        }

        function testDBExceptionWhenWrongSQL() {
            try {
                $db = DB::getInstance();
                $db->connect();
                $db->query("SELECT *");

                $this->fail("Expected exception");
            } catch (Exception $ex) {
                $this->pass();
            }
        }

        function testDBNormalWorkflow() {
            try {
                $db = DB::getInstance();
                $db->connect();
                $db->query("DROP TABLE IF EXISTS test;");
                $db->query("CREATE TABLE test (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY);");
                $db->query("INSERT INTO test VALUES();");
                $rows = $db->query("SELECT * FROM test;");
                $db->close();

                UnitTestCase::assertEqual(1, count($rows));
                UnitTestCase::assertIsA($rows[0]["id"], "String");
                UnitTestCase::assertTrue($rows[0]["id"] > 0);
            } catch (Exception $ex) {
                $this->fail();
            }
        }
    }
?>
