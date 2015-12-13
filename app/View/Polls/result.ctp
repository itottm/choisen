<h1>Result</h1>
<div class="row">
  <?php for($i = 0; $i < 3; $i++) : ?>
    <div class="box" id="box_<?= h($i); ?>"><!--<?= h($results[$i]); ?>--></div>
  <?php endfor; ?>
</div>
<div id="btn"><a href="index.php">Go Back</a></div>
