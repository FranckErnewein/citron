<?php

class company extends BaseModel implements IModel{

    public $id;
    public $siret;
    public $name;
    public $phone;
    public $mail;
    public $fax;
    public $address;

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->siret = new String();
        $this->name = new String();
        $this->phone = new String();
        $this->mail = new Email();
        $this->fax = new String();
        $this->address = new String();
       

		$this->set( $data );

    }



}

?>
