<?php 

class Demand extends AbstractModel
{


	public function getList( $userId, $search=null , $datestart = null, $dateend = null ){


		$sql = '
			SELECT 
				d.id, 
				d.reference, 
				d.creation_date, 
				d.last_update, 
				d.end_date, 
				d.title, 
				d.city, 
				d.city_code 
			FROM demand AS d
			WHERE user_id = ' . mysql_real_escape_string($userId) . '
			ORDER BY  `d`.`last_update` ASC 
			LIMIT 0,30
		';	

		$result = mysql_query( $sql );
			
		$demand = array();

		$i = 0;

		while($row = mysql_fetch_object($result)){
			$demand[$i] = array();
			$demand[$i]['id'] = $row->id;
			$demand[$i]['reference'] = $row->reference;
			$demand[$i]['title'] = $row->title;
			$demand[$i]['creation_date'] = $row->id;
			$demand[$i]['last_update'] = $row->last_update;
			$demand[$i]['end_date'] = $row->end_date;
			$demand[$i]['city'] = $row->city;
			$demand[$i]['city_code'] = $row->city_code;

			$i++;
		}

		return $demand;

		
	}



	public function getById( $id ){

		$result = mysql_query('
			SELECT * 
			FROM demand AS d, article_need AS a
				WHERE d.id = '.mysql_real_escape_string($id).'
				AND d.id = a.demand_id
			');

		$first = true;
		$demand = array();

		while($row = mysql_fetch_object($result)){

			if($first){
				$demand['id'] = $row->demand_id;
				$demand['user_id'] = $row->user_id;
				$demand['title'] = $row->title;
				$demand['reference'] = $row->reference;
				$demand['last_update'] = $row->last_update;
				$demand['end_date'] = $row->end_date;

				$demand['article'] = array();

				$first = false;
			}

			$demand['article'][$row->id] = array();
			$demand['article'][$row->id]['name'] = $row->name;
			$demand['article'][$row->id]['quantity'] = $row->quantity;
			$demand['article'][$row->id]['price_need'] = $row->price_need;
			$demand['article'][$row->id]['freeze'] = $row->freeze;
			$demand['article'][$row->id]['fixed'] = $row->fixed;


		}

		return $demand;

	}



}

/*

$d = new Demand();
$r = json_encode($d->getById(1));


echo '<script>console.log(JSON.parse(\''.$r.'\'))</script>';
echo '<pre>';
print_r($d->getById(1));

*/

?>
