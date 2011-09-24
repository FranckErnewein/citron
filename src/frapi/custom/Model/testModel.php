<?php

include 'ModelManager.php';

$m = new ModelManager( 'user' );


$a = new Int(2, 6);
$a->set( 1 );
echo $a->value;




?>