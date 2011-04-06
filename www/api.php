<?php
//start session
session_start();

function debug($obj){
	if(!headers_sent()){
		header('Content-Type: text/plain');
	}
	var_dump($obj);
}

include '../config.php';
include APP_PATH . 'php/API.php';

$rest_string = str_replace( $_SERVER['SCRIPT_NAME'], '', $_SERVER['PHP_SELF'] );


$api = new API();
$api->execute($rest_string, $_SERVER['REQUEST_METHOD']);

?>
