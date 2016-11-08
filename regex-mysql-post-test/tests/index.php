<?php
    require_once(dirname(__FILE__) . '/../../libs/php/simpletest/autorun.php');

    ini_set("display_errors", "1");
    error_reporting(E_ALL ^ E_DEPRECATED);

    //require_once("./testPost.php");

    foreach (glob("./*.php") as $filename)
    {
        if($filename != "./index.php"){
            require_once $filename;
        }
    }

?>
