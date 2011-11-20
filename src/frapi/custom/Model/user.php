<?php

class user extends BaseModel implements IModel{


    public $id;
    public $type;
    public $email;
    public $password;
    public $creation_date;
    public $company_id;

    public function __construct( $data=null ){


        $this->id = new Id();
        $this->type = new Int(0,3);
        $this->email = new Email();
        $this->password = new Password();
        $this->creation_date = new Date();
        $this->company_id = new Id();


        if($data != null){
            $this->type->set( $data['type'] );
            $this->email->set( $data['email'] );
            $this->password->set( $data['password'] );
        }
        
        
    }



    public function set_creation_date( $value ){
        //can not set date
    }

    

    

    

}

?>
