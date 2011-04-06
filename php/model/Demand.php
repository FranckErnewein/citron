<?php 


include 'AbstractModel.php';


class Demand extends AbstractModel
{



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


$d = new Demand();
$r = json_encode($d->getById(1));


echo '<script>console.log(JSON.parse(\''.$r.'\'))</script>';
echo '<pre>';
print_r($d->getById(1));



?>
