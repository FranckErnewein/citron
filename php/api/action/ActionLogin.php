<?php


class ActionLogin extends BaseApi
{
	public function get(){
		return $this->login($_GET['login'], $_GET['password']);
	}

	public function post(){
		return $this->login($_POST['login'], $_POST['password']);
	}

	private function login($login = null, $password = null){

		if(!isset($login) || !isset($password) ){
			$this->error(403);	
		}

		$user = new User();	

		$data = $user->login($login, $password);
		if( $data ){
			return $data; 
		}else{
			$this->error(403);
		}
	}
}



?>
