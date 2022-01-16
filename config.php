<?php
$config = array();

$localhost=$_SERVER['HTTP_HOST'];
$ld1='/tudiquesi/public_html/';
$ld2='/';

$rtl=realpath($ld1);
$rtr=realpath($ld2);


$dir_local=$ld1."upls/";	
$dir_remoto=$ld2."upls/";

$carpeta_sistema="sistema/";

// setup some definitions
// The applications root path, so we can easily get this path from files located in other folders
define( "FRAMEWORK_PATH", dirname( __FILE__ ) ."/" );
define('DS', DIRECTORY_SEPARATOR);


$vista_final=FRAMEWORK_PATH."vistas/basica/plantillas/vista.php";
define( "AJAX_FILE",FRAMEWORK_PATH."vistas/basica/plantillas/ajax.php");
/** Configuration Variables **/
        
 if (stristr($_SERVER['HTTP_HOST'], 'laweb') || stristr($_SERVER['HTTP_HOST'], 'local') || (substr($_SERVER['HTTP_HOST'], 0, 7) ==
'192.168')) {

if (stristr($_SERVER['HTTP_HOST'], 'laweb')){
	$localhost="laweb:81";
}

$config['db_ecom_host'] = 'localhost';
$config['db_ecom_user'] = 'ejcs';
$config['db_ecom_pass'] = 'vivaitalia2009&';
$config['db_ecom_name'] = 'tudiquesi_sistema';	
 $local = TRUE;
 } else {
$config['db_ecom_host'] = 'localhost';
$config['db_ecom_user'] = 'tudiques_ejcs';
$config['db_ecom_pass'] = 'vivaitalia2009&';
$config['db_ecom_name'] = 'tudiques_sistema';	 
 $local = FALSE;
 }
 
 
if($local){
$dir_crp= getcwd();
$carpeta_plantilas_html=$dir_crp.$rtl."/vistas/basica/plantillas/temas/";
$carpeta_plantilas_html=realpath($carpeta_plantilas_html);

$url_plantilas_html=$localhost.$ld1."vistas/basica/plantillas/temas/";


define("CRP_TEMAS_HTML",$carpeta_plantilas_html);
define("URL_TEMAS_HTML",$url_plantilas_html);


define("CRP_SIST",$carpeta_sistema);	
define("DIR_CARGA",$dir_local);
 define("DIR_CARGA_REGISTRO",$dir_local);
define ('AMBIENTE_DESARROLLO',true);
define('DB_NAME', 'tudiquesi');
define('DB_USER', 'ejcs');
define('DB_PASSWORD', '12345');
define('DB_HOST', 'localhost');

define('DB_NAME2', 'tudiquesi_sistema');
define('DB_USER2', 'ejcs');
define('DB_PASSWORD2', 'vivaitalia2009&');
define('DB_HOST2', 'localhost');

define ('BASE_URI', $_SERVER["DOCUMENT_ROOT"].'/tudiquesi/public_html/');
define ('BASE_URL', 'http://'.$localhost.'/tudiquesi/public_html/');
define ('BASE_URL_EXT', 'http://'.$localhost.'/');
define('DB_INFO', 'mysql:host=localhost;dbname=tudiquesi');


}
else{

$dir_crp= getcwd();
$carpeta_plantilas_html=$dir_crp.$rtr."/vistas/basica/plantillas/temas/";
$carpeta_plantilas_html=realpath($carpeta_plantilas_html);

$url_plantilas_html=$localhost.$ld2."vistas/basica/plantillas/temas/";

define("CRP_TEMAS_HTML",$carpeta_plantilas_html);
define("URL_TEMAS_HTML",$url_plantilas_html);


define("CRP_SIST",$carpeta_sistema);	
define("DIR_CARGA",$dir_remoto);
 define("DIR_CARGA_REGISTRO",$dir_remoto);
define ('AMBIENTE_DESARROLLO',true);
define('DB_NAME', 'tudiquesi');
define('DB_USER', 'tudiques_ejcs');
define('DB_PASSWORD', 'vivaitalia2009&');
define('DB_HOST', 'localhost');

define('DB_NAME2', 'tudiques_sistema');
define('DB_USER2', 'tudiques_ejcs');
define('DB_PASSWORD2', 'vivaitalia2009&');
define('DB_HOST2', 'localhost');

define ('BASE_URI', $_SERVER["DOCUMENT_ROOT"].'/');
define ('BASE_URL', 'https://www.opinionconpasion.com/');	
define ('BASE_URL_EXT', 'https://'.$localhost.'/');
define('DB_INFO', 'mysql:host=localhost;dbname=tudiquesi_sistema');

	}
	
?>
