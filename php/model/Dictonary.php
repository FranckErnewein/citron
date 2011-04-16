<?php

class Dictonary extends AbstractModel
{

	
	public function getLang($lang){
		$sql = 'SELECT `namespace`,`key`,`value`
				FROM dictionary
				WHERE lang_key="'.mysql_real_escape_string($lang).'"
				';

		$result = mysql_query($sql);
		$currentNameSpace = '';

		$bundle = array();
		while($row = mysql_fetch_object($result)){
			
			if($row->namespace != $currentNameSpace){
				$bundle[$row->namespace] = array();	
				$currentNameSpace = $row->namespace;

			}
			$bundle[$currentNameSpace][$row->key] = $row->value;	

		}

		return $bundle;

	}


}
