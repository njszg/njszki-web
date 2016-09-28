<?php
session_start();

print_r($_SESSION);
print "<br />";

//session_register('alma');

$_SESSION['alma'] = 'fa';

?>
