<?php

class article extends BaseModel implements IModel{

    public $id;
    public $demand_id;
    public $name;
    public $quantity;
    public $price_need;
    public $freeze;
    public $fixed;

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->demand_id = new Id();
        $this->name = new String();
        $this->quantity = new Int();
        $this->price_need = new Int(0,1000);
        $this->freeze = new Int(0,1);
        $this->fixed = new Int(0,1);



		$this->set( $data );

    }



}

?>
