<?php

include_once MODEL_PATH . 'AbstractModel.php';
include_once MODEL_PATH . 'User.php';

abstract class AuthentifiedAction extends BaseApi
{

	public function __construct($mode){

		parent::__construct($mode);
		
		//if not logged die on 403
		if(!$_SESSION['user']){
			$this->error(403);
		}
		
		$this->user = new User($_SESSION['user']);	

	}


	public function query($SQL)
	{
		return mysql_query(mysql_real_escape_string($sql));
	}

}


?>
