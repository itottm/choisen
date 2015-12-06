<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/Poll.php';

try{
  $poll = new \MyApp\Poll();
}catch(Exception $e){
  echo $e->getMessage();
  exit;
}

$results = $poll->getResults();
//var_dump($results);
//exit;

?>
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Poll Result</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Result</h1>
  <div class="row">
    <?php for($i = 0; $i < 3; $i++) : ?>
    <div class="box" id="box_<?= h($i); ?>"><?= h($results[$i]); ?></div>
    <?php endfor; ?>
  </div>
  <div id="btn"><a href="index.php">Go Back</a></div>
</body>
</html>
