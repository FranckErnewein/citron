<?php

class company_x_seller extends BaseModel implements IModel{


    public $id;
    public $demand_id;
    public $seller_id;
    public $accepted;
    

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->demand_id = new Id();
        $this->seller_id = new Id();
        $this->accepted = new String();
        
        $this->set( $data );
        
    }



    

    

    

}

?>
