<?php


class Tender extends AbstractModel
{
	protected $table = 'tenders';

	public function __construct($id=null) {
		parent::__construct();
		if( $id != null ){
			$this->getFromDb($id);		
		}

	}


	public function logout(){
		unset($_SESSION['user']);
	}
	

}



?>
