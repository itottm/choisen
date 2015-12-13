<?php
App::uses('Sanitize', 'Utility');

class MySampleDataController extends AppController {
  function index(){
    $this->layout="Sample";
    $this->set("header_for_layout","SampleApplication");
    $this->set("footer_for_layout","copyright by itottm");
    $datas=$this->MySampleData->find('list');
    $this->set('datas',$datas);
  }

  function find(){
    $this->layout="Sample";
    $this->set("header_for_layout","SampleApplication");
    $this->set("footer_for_layout","copyright by itottm");

    if(isset($this->data['id'])){
      $id=$this->data['id'];
      $status=array(
        'conditions'=>array('MySampleData.id'=>'$id')
      );
      $data=$this->MySampleData->find('first',$status);
    }else{
      $data=null;
    }
    debug($this->data);
    $this->set('data',$data);
  }
}
