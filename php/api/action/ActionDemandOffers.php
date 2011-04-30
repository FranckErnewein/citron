<?php
include MODEL_PATH . 'Offer.php';

class ActionDemandOffers extends AuthentifiedAction
{

	public function get($id = null){


		
		if(is_int(intval($id))){

			$o = new Offer();	
			return $o->getOfferForDemand($id);

		}

	}
	
}

?>
