<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ModelManager
 *
 * @author franck
 */

include 'BaseModel.php';


class ModelManager {
    //put your code here

    private $model;
    private $modelConstructor;
    private $table;

    public function __construct( $model=null ){
        //connect DB
        $this->connection = mysql_connect(DATABASE_SERVER, DATABASE_USER, DATABASE_PASSWORD);
		mysql_set_charset('utf8', $this->connection);
		$this->database = mysql_select_db(DATABASE_NAME, $this->connection);

        $this->modelConstructor = $model;

        if( $model != null){
            $this->focus( $model );
        }
        
        
    }



    public function focus( $model ){
        include_once $model . '.php';
        $this->model = new $model();
        $this->table = $model;
    }

    public function create( $data ){
        $values = '';

        

        $ctr = $this->modelConstructor;
        $this->model = new $ctr( $data );

        

        $sql = "
            INSERT INTO `" . $this->table . "` 
            (". $this->getFieldsString() . ")
            VALUES
            (" . $this->getValuesString() . ")
        ";


        mysql_query($sql);

        return $this->read( array(
            "clause" => array( "id" => mysql_insert_id() )
        ));
    }


    
    public function read( $options = array() ){

        $clause = '';

        if( isset( $options['clause'] ) ){
            if( isset( $options['operator'] ) ){
                $operator = $options['operator'];
            }else{
                $operator = 'OR';
            }
            $i =0;
            foreach( $options['clause'] as $key => $value ){
                $i++;
                $clause .= "`".$key."`='".mysql_real_escape_string( $value )."'";
                if( $i < count( $options['clause'] ) ){
                    $clause .= ' '.$operator.' ';
                }
            }
            if($i > 0){
                $clause = 'WHERE ' . $clause;
            }
        }


        $sql = "
            SELECT " . $this->getFieldsString() . "
            FROM " . $this->table . "
            " . $clause . "
        ";

        //echo $sql;
        
        $sql_result = mysql_query( $sql );
        
        $result = null;

        if( mysql_num_rows($sql_result) > 1){
            //build array of items
            $result = array();
            
            while($row = mysql_fetch_assoc( $sql_result )){

                $ctr = $this->modelConstructor;
                $export = new $ctr();
                $export->init( $row );
                $export = $this->export( $export );

                array_push($result,  $export);
            }
        }else if( mysql_num_rows( $sql_result) == 1 ){
            //juste return item
            $result = mysql_fetch_assoc( $sql_result );
        }else if( mysql_num_rows( $sql_result) == 0 ){
            //if no result => 404
            throw new Frapi_Error('NOT_FOUND', $this->table.' not found', 404);
        }
        
        //print_r($result);
        return $result;
    }

    public function update( $data ){
         
         $id = $data['id'];
         unset($data['id']);
         $ctr = $this->modelConstructor;
         $this->model = new $ctr( $this->read( array( 'clause'=> array('id' => $id) ) ) );
         $this->model->set( $data );
         

         $set = '';
         
         foreach($data as $key => $value){
             if(isset($this->model->$key)){
                 $set .= $key.'='.$this->model->$key->getForSQL().', ';
             }
         }

         $set = substr($set, 0, -2) . ' ';

         $sql = '
            UPDATE '.$this->table.'
            SET '.$set.'
            WHERE id='.$id.'
         ';

        if(mysql_query($sql)){
            return $this->read( array( 'clause' => array( 'id'=>  $id ) ) );
        }
        


    }

    public function delete( $id ){
        //check if item exist
        $this->read( array( 'clause'=> array('id' => $id) ) );
        
        //delete it
        $query = 'DELETE from `' . $this->table . '` WHERE id=' . $id;
        return mysql_query( $query );
    }

    private function setFieldsValue( $data ){
        foreach( $this->model as $key => $value ){
            $methodeName = 'set_'.$key;
            $this->$methodeName( $data[ $key ] );
        }
    }

    private function getFieldsString(){
        $string = '';
        foreach( $this->model as $key => $value ){
            $string .= '`' . $key . '`, ';
        }
        $string = substr($string, 0, -2) . ' ';
        return $string;
    }

    private function getValuesString( $default=array() ){
        $string = '';
        foreach( $this->model as $key => $value ){
           $string .= $this->model->$key->getForSQL() . ', ';
        }
        $string = substr($string, 0, -2) . ' ';
        
        return $string;
    }

    private function export( $model=null ){

        if($model == null){
            $model = $this->model;
        }

        $exp = array();
        foreach( $model as $key => $value ){
            $exp[ $key ] = $model->get( $key );
        }

        //var_dump($exp);
        return $exp;

    }

}
?>
