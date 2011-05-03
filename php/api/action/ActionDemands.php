<?php
include MODEL_PATH . 'Demand.php';

class ActionDemands extends AuthentifiedAction
{

	public function get($id = null){

		
		if(intval($id) != 0){
			
			$demand = new Demand();	
			return $demand->getById($id);

		}else{

			$search = (isset($_GET['search']))? $_GET['search'] : null;
			$startdate = null;
			$enddate = null;
			if($_GET['startdate'] && $_GET['enddate']){
				$startdate = $_GET['startdate'];
				$enddate = $_GET['enddate'];
			}

			$demand = new Demand();
			if(isset($_GET['search'])){
				return $demand->getList( $this->user['id'], $search  );
			}else{
				return $demand->getList( $this->user['id'] );
			}
		}

	}
	
}

?>
