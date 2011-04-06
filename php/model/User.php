<?php


class User extends AbstractModel //implements iModel
{
	public $table = 'users';

	public function __construct($id=null) {
		parent::__construct();
		if( $id != null ){
			$this->getFromDb($id);		
		}

	}

	public function login($login, $password){

		$sql = '
			SELECT id,password,login,type 
			FROM users
				WHERE login="'.mysql_real_escape_string($login).'"
				AND password="'.mysql_real_escape_string($password).'"
			';
		$result = mysql_query($sql);


		if(mysql_num_rows($result) == 1){
			
			while($row = mysql_fetch_object($result)){
				$user = array();
				$user['id'] = $row->id;
				$user['login'] = $row->login;
				$user['type'] = $row->type;
			}

			//register id in session
			$_SESSION['user'] = $this->get('id');
			return $user;
		}else{
			unset($_SESSION['user']);
			return false;
		}

	}

	public function logout(){
		unset($_SESSION['user']);
	}

}



?>
