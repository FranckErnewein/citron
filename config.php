<?php
define('DATABASE_SERVER', 'localhost');
define('DATABASE_USER', 'root');
define('DATABASE_PASSWORD', 'root');
define('DATABASE_NAME', 'antoine');


if( isset($_SERVER['DOCUMENT_ROOT']) ){
    //echo '<pre>'.print_r($_SERVER).'</pre>';
    define('APP_PATH', $_SERVER['DOCUMENT_ROOT'].'/citron/' );
}else{
    //define('APP_PATH', '/Applications/MAMP/htdocs/citron/');
}




?>
