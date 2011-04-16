<?php

include_once MODEL_PATH . 'AbstractModel.php';
include_once MODEL_PATH . 'User.php';

abstract class AuthentifiedAction extends BaseApi
{

	public function __construct(){

		//if not logged die on 403
		if(!$_SESSION['user']){
			$this->error(403);
		}

		$model = new User();	
		$this->user = $model->getById($_SESSION['user']);

	}



}


?>
