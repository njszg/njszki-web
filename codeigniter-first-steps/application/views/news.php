<html>
	<head>
		<title>News</title>
		<link href="<?=base_url()?>css/news.css" rel="stylesheet" type="text/css" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	</head>
	<body>
	<table border="1">
		<?php foreach($records as $row): ?>
			<tr>
				<td><?= $row->id ?></td>
				<td><?= $row->text ?></td>
				<td><a href="<?=base_url()?>index.php/news/delete/<?= $row->id ?>">del</a></td>
				<td><a href="<?=base_url()?>index.php/news/get/<?= $row->id ?>">get</a></td>
				<td><a href="<?=base_url()?>index.php/news/update/<?= $row->id ?>">upd</a></td>
			</tr>
		<?php endforeach; ?>

	</table>
	<br />
	<a href="add">Add new news</a>
	</body>
</html>
