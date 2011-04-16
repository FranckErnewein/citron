<?php
include MODEL_PATH . 'Dictonary.php';

class ActionBundle extends BaseApi
{

	public function get(){
		$dico = new Dictonary();

		$lang = (isset($_GET['lang']))? $_GET['lang'] : 'fr';
	

		return $dico->getLang($lang);

	}
	
}

?>
