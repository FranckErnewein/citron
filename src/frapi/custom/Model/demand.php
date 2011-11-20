<?php

class demand extends BaseModel implements IModel{

    public $id;
    public $user_id;
    public $company_id;
    public $reference;
    public $title;
    public $creation_date;
    public $last_update;
    public $end_date;
    public $city;
    public $city_code;
    public $x;
    public $y;

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->user_id = new Id();
        $this->company_id = new Id();
        $this->reference = new String();
        $this->title = new String();
        $this->creation_date = new Date();
        $this->last_update = new Date();
        $this->end_date = new Date();
        $this->city = new String();
        $this->city_code = new String();
        $this->x = new Int(0,1000);
        $this->y = new Int(0,1000);



		$this->set( $data );

    }



}

?>
