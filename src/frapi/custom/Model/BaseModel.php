<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class Context{

    public static $user_id;

    protected function __construct(){
        if(isset( self::$user_id )){
            return self;
        }else{
            return new Context();
        }
    }
    
    
}


/**
 * Description of BaseModel
 *
 * @author franck
 */
abstract class BaseModel {

   public static $context;

   public function __construct(){
        $this->context = Context::singleton();
   }


   public function init( $data ){
       foreach( $this as $key => $value){
           if( isset( $data[$key] ) ){
               $this->$key->value = $data[$key];
           }
       }

   }

  

   public function set($field, $value=null){

       
       if( isset($field) && is_array( $field ) && $value == null){
           foreach( $this as $key => $value){
               if( isset( $field[$key] ) ){
                   $this->set( $key, $field[$key] );
               }
           }
       }else if(isset($field)){
           $setterName = 'set_'.$field;
            if( method_exists($this, $setterName ) ){
                call_user_func( array($this, $setterName), $value );
            }else{
                $this->$field->set( $value );
            }
       }
   }

   public function get( $field ){
       $getterName = 'get_'.$field;
       if( method_exists($this, $getterName ) ){
            return call_user_func(array($this, $getterName ));
        }else{
            return $this->$field->get();
        }
   }

  


   public function get_id(){
       return $this->id->get();
   }

   public function set_id(){
       //TODO : throw and ERROR ?
   }




}


interface IModel{



}




define('BAD_TYPE', 'BAD_TYPE');


abstract class ModelType {

   public $value;

   protected function error( $message='no message' ){
       throw new Frapi_Error(BAD_TYPE, $message, 400);
       //echo 'erreur : '.$message .'<br />';
       //var_dump($this);
   }

   public function get(){
       return stripslashes($this->value);
   }

   public function getForSQL(){
       return mysql_real_escape_string($this->value);
   }

}

class Int extends ModelType{
    protected $max = null;
    protected $min = null;
    public $value = 0;

    public function __construct($min=null, $max=null){
        $this->min = $min;
        $this->max = $max;
    }

    public function set( $value ){
        $options = array();
        if( $this->max != null ){
            $options['max_range'] = $this->max;
        }
        if( $this->min != null ){
            $options['min_range'] = $this->min;
        }
        
        if( filter_var($value, FILTER_VALIDATE_INT, $options) === false ){
           $this->error('Interger Range Error, '.$this->min.' : '.$this->max);
        }else{
            $this->value = $value;
        }

        
    }
}

class Id extends Int{
    protected $min = 1;
    public $value='NULL';
}

class String extends ModelType{
    protected $max;
    protected $min=0;

    public function __construct( $min=0, $max=null ){
        $this->min = $min;
        $this->max = $max;
    }
    
    public function set( $value ){
        
        if( !is_string( $value ) ){
            $this->error();
        }else{
            if( strlen($value) < $this->min || ($this->max != null && strlen($value) < $this->min) ){
                $this->error();
            }else{
                $this->value = $value;
            }
        }
        
        
    }

    public function getForSQL(){
        return '"'.parent::getForSQL().'"';
    }



}

class Password extends String{

    public function __construct(){
        parent::__construct(6, 30);
    }

    public function set( $value ){
        parent::set( $value );
    }

}

class Email extends String{

    public function set( $value ){
        if( filter_var($value, FILTER_VALIDATE_EMAIL) === false ){
             $this->error('Email is not valid');
        }else{
            $this->value = $value;
        }
    }

}

class Date extends ModelType{

    public function __construct(){
        $this->now();
    }

    public function now(){
        $this->value = date('c');
        //$this->value = new DateTime();
    }

    public function set( $value ){
        
    }

    public function getForSQL(){

        return '"'.parent::getForSQL().'"';
    }
}



?>
