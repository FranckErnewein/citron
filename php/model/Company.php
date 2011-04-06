<?php

class Company extends AbstractModel
{

	protected $table = 'company';

	public function __construct($id = null){

		parent::__construct();
		if( $id != null ){
			$this->getFromDb($id);		
		}

	}


	public function getContact($id = null){
		if($id == null){
			$id = $this->data['id'];
		}	
		$fetch = $this->query('SELECT * FROM contact WHERE company_id="'.$id.'"');
		$result = array();
		$i = 0;
		while($row = mysql_fetch_object($fetch) ){
			$result[$i] = $row;
			$i++;
		}
		return $result;

	}




}

?>
