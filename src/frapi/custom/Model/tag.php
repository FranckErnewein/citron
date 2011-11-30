<?php

class tag extends BaseModel implements IModel{


    public $id;
    public $company_id;
    public $label;
    public $css_class;
    public $color;
    

    public function __construct( $data=null ){


        $this->id = new Id();
        $this->company_id = new Id();
        $this->label = new String();
        $this->css_class = new String();
        $this->color = new String();
        
        $this->set( $data );
        
    }



    

    

    

}

?>
