<?php

class ActionUserMe extends AuthentifiedAction
{

	public function get(){
		return $this->user;
	}
	
}

?>
