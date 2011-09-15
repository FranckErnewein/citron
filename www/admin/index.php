<?php


function loadTemplate($path){

    $str = "<script>
            
            var TEMPLATE = {};\n";
    if ($handle = opendir($path)) {

        while (false !== ($file = readdir($handle))) {
            
            if( !($file == '.' || $file == '..') && strpos($file, '.html') === strlen($file) - 5 ){
                $tmplName = substr($file ,0, -5);
                $fileContent = file_get_contents( $path.'/'.$file );

                
                echo '<script type="text/html" id="'.$tmplName.'_tmpl_str">' . $fileContent.'</script>';

                $str .= " \n console.log('".$tmplName."');";
                $str .= "TEMPLATE['".$tmplName."']= _.template( document.getElementById('".$tmplName."_tmpl_str').innerHTML.toString() );";
                $str .= " \n";

                
            }
        }

        closedir($handle);
    }
    $str .= '</script>';
    
    //echo $str;

}


include 'js/alljs.php';


?><!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Admin</title>
	<link rel="stylesheet" href="../css/bootstrap.css" />
	<script type="text/javascript">
		var admin = {};
		var common = {};
	</script>
	<script type="text/javascript" src="../js/const.js"></script>
	<script type="text/javascript" src="../js/lib/jquery-1.6.1.js"></script>
	<script type="text/javascript" src="../js/lib/underscore.js"></script>
	<script type="text/javascript" src="../js/lib/backbone.js"></script>
    <?php loadTemplate('template'); ?>
	<script type="text/javascript" src="js/model.js"></script>
	<script type="text/javascript" src="js/collection.js"></script>
	<script type="text/javascript" src="js/view.js"></script>
	<script type="text/javascript" src="js/router.js"></script>
	<script type="text/javascript" src="js/init.js"></script>
    <style type="text/css">
        
    </style>
</head>
<body>
	<div class="topbar">
		<div class="fill">
			<div class="container fixed">
				<h3><a href="#" class="logo">Admin</a></h3>
				<ul>
					<li><a href="#table/Users">Users</a></li>
				</ul>
			</div>
		</div>
	</div>
	<br />
	<br />
	<br />
    <div class="container">
        <a href="#table/Users/item/new" class="btn">Add new</a>
        <div id="form-view"></div>
        <table id="table-list" class="common-table zebra-striped">
            <thead>
            </thead>
            <tbody></tbody>
        </table>
    </div>
	
</body>
</html>
