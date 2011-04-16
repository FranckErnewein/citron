<?php


class User extends AbstractModel 
{
	public $table = 'users';

	public function __construct($id=null) {
		parent::__construct();
		if( $id != null ){
			$this->getFromDb($id);		
		}

	}

	public function getById($id){
		if(!is_int(intval($id))){
			return null;
		}
		
		$sql = '
			SELECT `id`,`email`,`type` 
			FROM users
			WHERE id="'.$id.'"
			';
		$result = mysql_query($sql);

		return mysql_fetch_array($result, MYSQL_ASSOC);
	
	}	

	public function login($login, $password){

		$sql = '
			SELECT id,password,email,`type`	
			FROM users
				WHERE email="'.mysql_real_escape_string($login).'"
				AND password="'.mysql_real_escape_string($password).'"
			';
		$result = mysql_query($sql);


		if(mysql_num_rows($result) == 1){
			
			while($row = mysql_fetch_object($result)){
				$user = array();
				$user['id'] = $row->id;
				$user['email'] = $row->email;
				$user['type'] = $row->type;
			}

			//register id in session
			return $user;
		}else{
			return false;
		}

	}



}



?>
