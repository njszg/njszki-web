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
	Példa webshop - <a href="<?=base_url().'index.php/termekek/kosar'?>"><?=$kosar['size']?> db termék <?=$kosar['value']?> Ft értékben.</a>
	</div>

	<?php foreach($termekek as $termek) : ?>
	<div class="termek">
		<div class="termek-belso">
			<div class="termek-kep">
				<img src="/ci/images/<?=$termek->kep?>" />
			</div>
			<div class="termek-nev">
				<?=$termek->nev?>
			</div>
			<div class="termek-ar">
				<?=$termek->ar?> Ft
			</div>
			<div class="termek-kosarba">
				<a href="<?=base_url().'index.php/termekek/kosarba/'.$termek->azon?>">Kosárba!</a>
			</div>
		</div>
	</div>
	<?php endforeach; ?>


</div>

</body>
</html>
