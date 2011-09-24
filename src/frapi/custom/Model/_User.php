<?php

include "AbstractModel.php";

class User extends AbstractModel
{

    public function __construct( $id = null ){


        parent::__construct();

        if($id != null){
            $this->get($id);
        }

        $this->validator = array(
            'email' => FILTER_VALIDATE_EMAIL,
            'id' => FILTER_VALIDATE_INT,
            'type' => FILTER_VALIDATE_INT
        );

        

    }

    public function get($id){

        $query = '
            SELECT *
            FROM users
            WHERE id='.$id.'
        ';

        $sql = mysql_query( $query );
        echo $sql;
        //$this->debug( $sql );

        //return array('sql' => $sql);
        return $this->reduce( $sql, array('id', 'email', 'type') );
    }

    public function getList(){
        $query = '
            SELECT *
            FROM users
        ';

        $sql = mysql_query( $query );

        //$this->debug( $sql );

        //return array('sql' => $sql);
        return $this->reduce( $sql, array('id', 'email', 'type') );
    }

    public function create( $data ){

        $this->validate( $data );

        $query = "
            INSERT INTO `users`
            (`email`, `type`, `password`)
            VALUES('".$data['email']."', '".$data['type']."', '".$data['password']."')
        ";

        //echo $query;

        mysql_query( $query );

        return $this->get( mysql_insert_id() );

    }

    public function edit( $id, $data ){

        $this->validate( $data );

        $setter = '';
        foreach( $data as $key => $value){
            $setter .= ' `' .$key . '`="' . mysql_real_eacepe_string($value) .'", ';
        }

        $query = "
            UPDATE `users`
            SET ".$setter."
            WHERE id=".mysql_real_eacepe_string($id)."
        ";

        echo $query;
        mysql_query( $query );
        
        return $this->get( $id );
    }

    

}
