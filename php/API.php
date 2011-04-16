<?php


define('MODEL_PATH', APP_PATH . 'php/model/');
define('API_PATH', APP_PATH . 'php/api/');

include API_PATH . 'utils/BaseApi.php';
include API_PATH . 'utils/AuthentifiedAction.php';
include API_PATH . 'utils/AdminAction.php';


class API
{
	public static $version = '1.0';

	public function __construct(){

	}

	public function execute( $path, $meth = 'GET' ){

		$method = strtolower($meth);
		$path = strtolower($path);

		$path_fragment = explode( '/',$path );
		$action = preg_grep("/^[a-z]+$/", $path_fragment);
		$id = preg_grep("/^[0-9]+$/", $path_fragment);


		$className = 'Action';
		foreach($action as $index => $value){ 
			$className .= ucwords($value);		
		}
		$className;
		$filePath = API_PATH . 'action/' . $className . '.php';
		if(!is_file($filePath)){
			BaseApi::error(404);
		}
	
		try{
			include $filePath;
			$instance = new $className();
			$this->render($instance->$method());
		}catch(Exception $e){
			
		}
		
		//debug($path_fragment);

	}


	public function render($data){
		header('Content-Type: text/plain');
		//json_encode($data);
		echo json_encode($data);
	}



}

?>
