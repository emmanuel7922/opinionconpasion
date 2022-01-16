<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	
<!-- BEGIN SHAREAHOLIC CODE -->

<!-- END SHAREAHOLIC CODE -->

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Tudiquesi.com Administraci&oacute;n</title>
				
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css" type="text/css" media="all">
	<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL_EXT; ?>listas.css"  />
		<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL_EXT; ?>basic.css"  />
		<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL_EXT; ?>menus.css"  />	
		<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL_EXT; ?>msj.css"  />
		<link type="text/css" rel="stylesheet" media="screen and (min-width: 1200px)" href="<?php echo BASE_URL; ?>vistas/sistema/css/general.css"  />
		<link rel="stylesheet" type="text/css" media="only screen and (max-width: 480px), only screen and (max-device-width: 480px)" href="<?php echo BASE_URL; ?>vistas/sistema/css/movil.css" />
	
		<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL; ?>vistas/sistema/css/menu.css"  />
	
		<link type="text/css" rel="stylesheet" media="all" href="<?php echo BASE_URL; ?>vistas/sistema/css/jsDatePick_ltr.min.css" />
	
	<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous">
	<script  type="text/javascript" src="<?php echo BASE_URL_EXT; ?>funciones.js" ></script>
	</head>
	<body>
		{emergente}

	<div class="cuerpo" id="cuerpo">

<div id="dialog-confirm" class="dialogo">
	<div class="dialog-confirm-container">
		<p>¿El nombre est&aacute; completo?</p>
		<ul class="cd-buttons">
			<li><a href="#" id="btsi">Si</a></li>
			<li><a href="#" id="btno">No</a></li>
		</ul>
		<a href="#0" class="bt-cerrar">Cerrar</a>
	</div> <!-- cd-popup-container -->
</div> <!-- cd-popup -->


<div class="back" id="back"></div>
<div class="trsp" id="trsp"></div>

<div class="superior">
	<div class="contenido">
<!-- START mensaje_sesion -->
<div class="cuadroControlLogin fondo333" id="icuadroControlLogin">
	<span class="cuadroCentrado" id="datosSesion">
	<p>{texto_sesion_ini}<b>{us_sesion_ini}</b></p>
	<a href="{liga_cerrar_ses}" class="acceso absoluto posicionDerecha">{txt_cerrar_ses}</a>
	</span>
</div>	
		<!-- END mensaje_sesion -->

		{menu-prin}	
       
		{msj-prin}
	
	</div>
	
</div>