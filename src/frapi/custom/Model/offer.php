<?php

class offer extends BaseModel implements IModel{
    

    public $id;
    public $demand_id;
    public $user_id;
    public $creation_date;
    public $last_update;

    public function __construct( $data=null ){

        $this->id = new Id();
        $this->demand_id = new Id();
        $this->user_id = new Id();
        $this->creation_date = new Date();
        $this->last_update = new Date();

        if($data != null){
            $this->demand_id->set( $data['demand_id'] );
            $this->user_id->set( $data['user_id'] );
        }
        
        
    }


    /**
     * @override
     * @param <type> $key
     * @param <type> $value
     */
    public function set($key, $value){
        if( $key != 'last_update' ){
            $this->last_update->now();
            parent::set($key, $value);
        }
    }


}

?>
