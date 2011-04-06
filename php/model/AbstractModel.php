<?php 

abstract class AbstractModel
{

	private $database;
	private $connection;

	protected $validator;

	public $data = array();

	public function __construct()
	{
		
		$this->connection = mysql_connect(DATABASE_SERVER, DATABASE_USER, DATABASE_PASSWORD);
		$this->database = mysql_select_db(DATABASE_NAME, $this->connection); 

	}


	public function get($field = null){
		if($field != null){
			return $this->data[$field];
		}else{
			return $this->data;
		}
	}

	public function set($field ,$value){
		$this->$data[$field] = $value;
	}


	public function getFromDb($id){
		$result = $this->select( array('id'=>$id) );
		var_dump($result);
		$this->import(mysql_fetch_object($result));
	}

	public function query($sql) {
		return mysql_query( $sql );
	}

	public function select($where = null ) {
		$closure = '';
		if($where != null){
			$closure = ' WHERE ';
			$length = count($where);
			$n = 0;
			foreach($where as $key => $value){
				$n++;
				$closure .= '`'.$key.'`="'.mysql_real_escape_string($value).'"';
				if($n < $length){
					$closure .= ' AND ';
				}
			}	
		}
		$result = $this->query('SELECT * FROM '.$this->table . $closure);
		return $result;
	}

	public function save(){
			
	}


	public function import($data){
		foreach( $data as $key => $value ){
			$this->data[$key] = $value;
		};	
	}

	public function export(){
		return $this->data;
	}

	public function copyFields($clone, $sql, $fields){
		foreach( $fields as $field => $value ){
			$clone[$field] = $value;
		}
		return $clone;
	}


}


?>
