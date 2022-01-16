<div class="listadoGeneral">

<!--PAGINADOR-->	
<div class="paginador">
<div class="botones">
<a href="<?php echo BASE_URL; ?>sistema/configuracion/agregar_categoria/?pgmenos=10" id="menosPag"></a>
<span>{ini}</span>
<span>{fin}</span>
<a href="<?php echo BASE_URL; ?>sistema/configuracion/agregar_categoria/?pgmas=10" id="masPag"></a>
</div>
</div>
<!--PAGINADOR-->

<table>
<tr><th>Categoria</th><th>Descripci&oacute;n</th><th>Modificar</th><th>Eliminar</th></tr>
<!-- START registros -->

<tr>
<form name="fr_{id_ctg}" method="post" action="" enctype="application/x-www-form-urlencoded">
<td><input type="text" name="nombre" value="{nombre}"/>
	<input type="hidden" name="id_ctg" value="{id}"></td>
<td>
	<textarea class="ancho-200px" name="descripcion">{descripcion}</textarea>
  
</td>

<td><input type="submit" name="modificar_categoria" id="modificar_categoria" value="Modificar" /></td>
<td><input type="submit" name="eliminar_categoria" id="eliminar_categoria" value="Eliminar" /></td>
</form>
</tr>

<!-- END registros -->
</table>
</div>