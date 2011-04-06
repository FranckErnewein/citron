<?php

abstract class AdminAction extends AuthentifiedAction
{

	public function __construct($mode){

		parent::__construct($mode);
		
		//if user is not an admin die on 403
		if($this->user->get('type') != 1 ){
			$this->error(403, 'you must be an admin');
		}

	}



}


?>
