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
			$id = array_values($id);
			include $filePath;
			$instance = new $className();
			switch (count($id)){
				case 0 : $this->render($instance->$method()); break;
				case 1 : $this->render($instance->$method($id[0])); break;
				case 2 : $this->render($instance->$method($id[0], $id[1])); break;
				case 3 : $this->render($instance->$method($id[0], $id[1], $id[2])); break;

			}
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
