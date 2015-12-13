<?php
App::uses('Sanitize', 'Utility');
// ↑サニタイズ（あやしいやつを無効化する）

class PollsController extends AppController {
//  public $scaffold;

  public function index() {
    $this->modelClass = null;
    $this->layout = "Polls";
//    $this->set("header_for_layout","Sample Application");
//    $this->set("footer_for_layout","copyright by itottm. 2015.");
    $datas=$this->Poll->find('all');
    $this->set('datas',$datas);
  }

  public function result() {
    $this->modelClass = null;
    $this->layout = "Polls";
//    $this->set("header_for_layout","Sample Application");
//    $this->set("footer_for_layout","copyright by itottm. 2015.");
  }

  public function form() {
    $text1 = $this->data["text1"];
    $check1 = isset($this->data["check1"])?"On":"Off";
    $radio1 = $this->data["radio1"];
    $this->set("text1",Sanitize::stripAll($text1));
//    $this->set("text1",h($text1));
    $this->set("check1",$check1);
    $this->set("radio1",$radio1);
  }
}
