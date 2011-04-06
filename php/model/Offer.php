<?php 

include_once '../config.php';
include_once 'AbstractModel.php';


class Offer extends AbstractModel
{

	public $table = 'offer';


	public function getOfferForDemand($demand_id){
		$result = mysql_query('
			SELECT 
				o.id,
				o.demand_id,
				o.user_id,
				a.id AS article_offer_id,
				a.creation_date,
				a.last_update,
				a.price,
				a.new_name,
				a.offer_id
			FROM article_offer AS a,offer AS o 
			WHERE a.offer_id = o.id
			AND o.demand_id = '.mysql_real_escape_string($demand_id).'
		');

		$last_offer_id = 0;
		$offer = array();

		while($row = mysql_fetch_object($result)){
			echo '<pre>';

			if($last_offer_id != $row->offer_id){
				$last_offer_id = $row->offer_id;
				$offer[$last_offer_id] = array();
				$offer[$last_offer_id]['user_id'] = $row->user_id;
				$offer[$last_offer_id]['article'] = array();

			}

			$offer[$last_offer_id]['article'][$row->article_offer_id] = array();
			$offer[$last_offer_id]['article'][$row->article_offer_id]['creation_date'] = $row->creation_date;
			$offer[$last_offer_id]['article'][$row->article_offer_id]['last_update'] = $row->last_update;
			$offer[$last_offer_id]['article'][$row->article_offer_id]['price'] = $row->price;
			$offer[$last_offer_id]['article'][$row->article_offer_id]['new_name'] = $row->new_name;


		}

		return $offer;

	}

	public function getListFromUser($user_id){

	}



}


$o = new Offer();
$r = $o->getOfferForDemand(1); 

echo '<pre>';
print_r($r);

?>
