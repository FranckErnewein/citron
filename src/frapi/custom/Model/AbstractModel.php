<?php



/**
 * Description of AbstarctModel
 *
 * @author franck
 */
class AbstractModel {

    private $database;
	private $connection;

    protected $validator;

    public function __construct()
	{

		$this->connection = mysql_connect(DATABASE_SERVER, DATABASE_USER, DATABASE_PASSWORD);
		mysql_set_charset('utf8', $this->connection);
		$this->database = mysql_select_db(DATABASE_NAME, $this->connection);

        if($this->validator == null){
            $this->validator = array();
        }
        
	}

    protected function reduceRow($row , $fields){
        $result = array();
        
        foreach( $fields as $value  ){
            //copy fields
			$result[$value] = $row->$value;
		}

        return $result;

    }

    protected function reduce( $fetch , $fields ){
        $result = array();

        $i=0;

        if( mysql_num_rows( $fetch ) > 0 ){
            while( $row = mysql_fetch_object( $fetch ) ){
                $result[ $i ] = $this->reduceRow( $row , $fields );
                $i++;
            }
        }
        
        if( count($result) == 1 ){
            //return only th first line
            return $result[0];
        }else{
            //return collection
            return $result;
        }

    }

    protected function validate ( $data, $filter=null ){

        $errors = array();

        if($filter == null){
            $filter = $this->validator;
        }

        foreach( $filter as $key => $type ){
            if( isset($data[$key]) && isset($filter[$key]) ){
                if( !filter_var($data[$key] , $filter[$key]) ){
                    $errors[ $key ] = $filter[ $key ];
                }
            }
        }

        return $errors;

    }

    protected function debug( $obj ){
        echo '<pre>';
        print_r( $obj );
        die;
    }

}


?>
