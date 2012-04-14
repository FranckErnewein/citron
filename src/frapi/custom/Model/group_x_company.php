<?php

class group_x_company extends BaseModel implements IModel{


    public $id;
    public $group_id;
    public $company_id;
    

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->group_id = new Id();
        $this->company_id = new Id();
        
        $this->set( $data );
        
    }



    

    

    

}

?>
