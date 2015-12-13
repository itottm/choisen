<h1>まいさんぷるでーただよ</h1>
<form action="find" method="post">
  ID:<input type="text" name="id">
  <input type="submit">
</form>

<table>
  <?php if(isset($data)): ?>
    <tr>
      <td>Name:</td>
      <td><?php echo $data['MySampleData']['name']; ?></td>
    </tr>
    <tr>
      <td>Mail:</td>
      <td><?php echo $data['MySampleData']['mail']; ?></td>
    </tr>
    <tr>
      <td>Tel:</td>
      <td><?php echo $data['MySampleData']['tel']; ?></td>
    </tr>
  <?php endif; ?>
</table>
