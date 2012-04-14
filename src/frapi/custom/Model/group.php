<?php

class group extends BaseModel implements IModel{


    public $id;
    public $company_id;
    public $name;
    

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->company_id = new Id();
        $this->name = new String();
        
        $this->set( $data );
        
    }



    

    

    

}

?>
