<?php
    require_once('../src/post.php');

    class TestPost extends UnitTestCase {

        function testPostNormal() {
            $post = new Post();
            $post->drop();
            $post->create();
            $post->insert(Array("name" => "Zsolt"));
            $post->update(1, Array("name" => "Zoli"));
            $row = $post->get(1);

            UnitTestCase::assertEqual("Zoli", $row["name"]);
            UnitTestCase::assertEqual(1, $row["id"]);

            $post->delete(1);
            $row = $post->get(1);

            UnitTestCase::assertIdentical(false, $row);
        }
    }
?>
