<?php 
$id="{id}";
$id=urlencode($id);
$url_im=BASE_URL."sistema/servicios/agregar_imagenes/?pr=$id"
?>
<div class="panel" id="panelListaTemas">
{buscador}

<a href='#' id='eliminarArchivosBasura' class="btnGeneral">Limpiar base de datos y archivos</a>
<a href='<?php echo BASE_URL; ?>sistema/publicaciones/relacionar_publicaciones' id='publicacionesRelacionadas' class="btnAzul">Publicaciones relacionadas</a>

<div class="listadoGeneral fondoBlanco" id="listadoFrases">
	<!--PAGINADOR-->	
<div class="paginador">
<div class="botones">
<a href="<?php echo BASE_URL; ?>sistema/publicaciones/listar_temas/?pgmenos=20" id="menosPag"></a>
<span>{ini}</span>
<span>{fin}</span>
<a href="<?php echo BASE_URL; ?>sistema/publicaciones/listar_temas/?pgmas=20" id="masPag">></a>
</div>
</div>
<!--PAGINADOR-->

<table id="tablaListadoFrases">

<tr> <th>Frase</th><th>Descripci&oacute;n</th><th>-+-</th></tr>
<!-- START registros -->
<tr>		
<form name="fr_frase" id="fri_frase" action="" method="post" enctype="application/x-www-form-urlencoded">
<input type="hidden" value="{id_frase}" name="id_frase" />
<td>{frase}</td><td>{descripcion}</td>

<td>
<a href="<?php echo BASE_URL; ?>sistema/publicaciones/eliminar_frase/?id_fra={id_frase}" id="eliminar_frase" class="rowElim"></a>
<a href="<?php echo BASE_URL; ?>sistema/publicaciones/modificar_frase/?id_fra={id_frase}" id="modificar_frase" class="rowEdit"></a>
</td>
</form>
</tr>
<!-- END registros -->
								  
</table>
</div>
</div>