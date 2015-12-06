<?php

namespace MyApp;

class Poll
{
  private $_db;

  public function __construct()
  {
    $this->_connectDB();
    $this->_createToken();
  }

  private function _createToken(){
    if (!isset($_SESSION['token'])){
      $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(16));
    }
  }

  private function _validateToken(){
    if(
      !isset($_SESSION['token']) ||
      !isset($_POST['token']) ||
      $_SESSION['token'] !== $_POST['token']
    ){
      throw new \Exception('invalid token!');
    }
  }

  public function post()
  {
    try {
      $this->_validateToken();
      $this->_validateAnswer();
      $this->_save();
      header('Location: http://' . $_SERVER['HTTP_HOST'] . '/gs_academy/lesson_ito/poll_php/result.php');
    } catch
    (\Exception $e) {
      $_SESSION['err'] = $e->getMessage();
      header('Location: http://' . $_SERVER['HTTP_HOST'] . '/gs_academy/lesson_ito/poll_php/');
    }
  }

  public function getResults() {
    $data = array_fill(0, 3, 0);

    $sql = "select answer, count(id) as c from answers group by answer";
    foreach($this->_db->query($sql) as $row){
      $data[$row['answer']] = (int)$row['c'];
    }
    return $data;
  }

  public function getError() {
    $err = null;
    if (isset($_SESSION['err'])) {
      $err = $_SESSION['err'];
      unset($_SESSION['err']);
    }
    return $err;
  }

  private function _validateAnswer() {
    // var_dump($_POST);
    // exit;
    if (
      !isset($_POST['answer']) ||
      !in_array($_POST['answer'], [0, 1, 2])
    ) {
      throw new \Exception('invalid answer!');
    }
  }

  private function _save(){
    $sql = "insert into answers
            (answer, created, remote_addr, user_agent, answer_date)
            values (:answer, now(), :remote_addr, :user_agent, now())";
    $stmt = $this->_db->prepare($sql);
    $stmt->bindValue(':answer',(int)$_POST['answer'], \PDO::PARAM_INT);
    $stmt->bindValue(':remote_addr',$_SERVER['REMOTE_ADDR'], \PDO::PARAM_STR);
    $stmt->bindValue(':user_agent',(int)$_POST['HTTP_USER_AGENT'], \PDO::PARAM_STR);

    try{
      $stmt->execute();
    }catch(\PDOException $e){
      throw new \Exception('No more vote for today!');
    }

  }

  private function _connectDB()
  {
    try {
      $this->_db = new \PDO(DSN, DB_USERNAME, DB_PASSWORD);
      $this->_db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    } catch (\PDOException $e) {
      throw new \Exception('Failed to connect DB');
    }
  }
}