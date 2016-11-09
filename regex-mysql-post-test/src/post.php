<?php

    include_once('table.php');

    class Post extends Table {
        function __construct(){
            parent::__construct("post");
        }
    }

?>
