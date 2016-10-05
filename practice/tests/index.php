<?php
  require_once(dirname(__FILE__) . '/../../libs/php/simpletest/autorun.php');

  foreach (glob("./*.php") as $filename)
  {
    if($filename != "./runTests.php"){
      require_once $filename;
    }
  }
?>
