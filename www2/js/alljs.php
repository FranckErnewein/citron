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
