<?php
	if(isset($_POST['name'])){
		if(preg_match("/^\d*$/i",$_POST['name'])){
			echo 'Helyes.';
		} else {
			echo 'Ez nem szám: '.$_POST['name'];
		}
	}
?>

<html>
  <head>
    <title>Ellenőrzött adatbevitel</title>
	<script type="text/javascript" src="jquery-3.1.0.js"></script>
	<script type="text/javascript" src="check.js"></script>
	<link href="check.css" type="text/css" rel="stylesheet" />
  </head>
  <body>

<div>
	<div id="name-valid" class="valid feedback">
	Szabályos érték.
	</div>
	<div id="name-invalid" class="invalid feedback">
	Csak számot írhatsz ide be!
	</div>
</div>
  
<form action="" method="post">
  <input type="text" name="name" onkeyup="check();" id="input-name" />
  <input type="submit" value="Kuld!" id="input-submit" />
</form>

  </body>
</html>
