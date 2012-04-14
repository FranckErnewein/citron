<?php

class demand_x_tag extends BaseModel implements IModel{


    public $id;
    public $demand_id;
    public $tag_id;
    

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->demand_id = new Id();
        $this->tag_id = new Id();
        
        $this->set( $data );
        
    }



    

    

    

}

?>
