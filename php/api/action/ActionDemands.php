<?php
include MODEL_PATH . 'Demand.php';

class ActionDemands extends AuthentifiedAction
{

	public function get($id = null){

		
		if(intval($id) != 0){

			$demand = new Demand();	
			return $demand->getById($id);

		}else{

			$demand = new Demand();
			if(isset($_GET['search'])){
				return $demand->getList( $this->user['id'], $_GET['search'] );
			}else{
				return $demand->getList( $this->user['id'] );
			}
		}

	}
	
}

?>
