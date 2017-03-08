<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Terméklista</title>
	<link href="/ci/css/termekek.css" rel="stylesheet" type="text/css" />
</head>
<body>

<div id="container">

	<div id="fejlec">
	Példa webshop - Kosár tartalma <a href="<?=base_url().'index.php/termekek'?>">Vissza a boltba</a>
	</div>

	<?php foreach($termekek as $index=>$termek) : ?>
	<div class="kosar">
		<div class="kosar-belso">
			<div class="kosar-kep">
				<img src="/ci/images/<?=$termek->kep?>" />
			</div>
			<div class="kosar-nev">
				<?=$termek->nev?>
			</div>
			<div class="kosar-ar">
				<?=$termek->ar?> Ft
			</div>
			<div class="kosar-kosarba">
				<a href="<?=base_url().'index.php/termekek/kosarbol/'.$index?>">X</a>
			</div>
		</div>
	</div>
	<?php endforeach; ?>

	<div class="kosar">
		<div class="kosar-belso osszesen">
			<div class="kosar-kep">
				<img src="/ci/images/kosar.png" />
			</div>
			<div class="kosar-nev">
				Összesen <?=$kosar['size']?> db termék
			</div>
			<div class="kosar-ar">
				<?=$kosar['value']?> Ft
			</div>
			<div class="kosar-kosarba">

			</div>
		</div>
	</div>

</div>

</body>
</html>
