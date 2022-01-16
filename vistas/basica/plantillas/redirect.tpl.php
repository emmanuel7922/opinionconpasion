<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>

<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL;  ?>vistas/sistema/css/general.css"/>
<link type="text/css" rel="stylesheet" href="<?php echo BASE_URL;  ?>vistas/sistema/css/marcos.css"/>
   
<base href="http://localhost/lavozdetekax/public_html/" />
	<title>Por favor espere, esta siendo redireccionado...</title>
	<meta http-equiv="refresh" content="{tiempo}; url={url}" />
</head>
<body>
	<div class="cuerpo">
		<div class="medio">
			<div class="marco" id="marcoCentral">
	<div class="bsi"></div>
	<div class="bsu"></div>
	<div class="bsd"></div>
	<div class="cen">
<h1>{header}</h1>
<p class="mensajeRedir">{message}</p>
	<a href="{url}" class="redir">Presione aqu&iacute; si no es redirigido.</a>
	

</div>

	<div class="bii"></div>
	<div class="bin"></div>
	<div class="bid"></div>
	</div>
</div>
</div>
</body>
</html>