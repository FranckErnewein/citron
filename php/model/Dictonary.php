<?php

class Dictonary extends AbstractModel
{

	
	public function getLang($lang){
		$sql = 'SELECT `namespace`,`key`,`value`
				FROM dictionary
				WHERE lang_key="'.mysql_real_escape_string($lang).'"
				';

		$result = mysql_query($sql);

		$bundle = array();
		while($row = mysql_fetch_object($result)){

			if( !$bundle[$row->namespace] ){
				$bundle[$row->namespace] = array();	
			}
			$bundle[$row->namespace][$row->key] = $row->value;	

		}

		return $bundle;

	}


}
