<?php

class ActionLogout extends AuthentifiedAction
{

	public function get(){
		return $this->logout();
	}

	public function post(){
		return $this->logout();
	}

	private function logout(){
		unset($_SESSION['user']);
		$result = array('logout'=>true);
		return $result;
	}

}

?>
