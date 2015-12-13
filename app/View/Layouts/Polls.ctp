<!doctype html>
<html lang="ja">
<head>
  <?php echo $this->Html->charset(); ?>
  <title><?php echo $title_for_layout; ?></title>
  <?php
    echo $this->Html->meta('icon');
  echo $this->Html->css('Polls');
  ?>
</head>
<body>
<div id="container">
<!--  <div id="header">-->
<!--    --><?php //echo $header_for_layout; ?>
<!--  </div>-->
  <div id="content">
    <?php echo $this->Session->flash(); ?>
    <?php echo $content_for_layout; ?>
  </div>
<!--  <div id="footer">-->
<!--    --><?php //echo $footer_for_layout; ?>
<!--  </div>-->
  <?php
  echo $scripts_for_layout;
  ?>
</div>
</body>
</html>