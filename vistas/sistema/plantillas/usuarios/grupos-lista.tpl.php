<div class="listadoGeneral">

<!--PAGINADOR-->	
<div class="paginador">
<div class="botones">
<a href="<?php echo BASE_URL; ?>admin/usuarios/grupos/?pgmenos=10" id="menosPag"></a>
<span>{ini}</span>
<span>{fin}</span>
<a href="<?php echo BASE_URL; ?>admin/usuarios/grupos/?pgmas=10" id="masPag"></a>
</div>
</div>
<!--PAGINADOR-->

<table>

<tr><th>Grupo</th><th>Modificar</th><th>Eliminar</th></tr>
<!-- START registros -->

<tr>
<form name="fr_{id}" method="post" action="" enctype="application/x-www-form-urlencoded">
<td><input type="text" name="grupo" value="{nombre}">
	<input type="hidden" name="id_grupo" value="{id}"></td>


<td><input type="submit" name="modificar_grupo" id="modificar_grupo" value="Modificar" /></td>
<td><input type="submit" name="eliminar_grupo" id="eliminar_grupo" value="Eliminar" /></td>
</form>
</tr>

<!-- END registros -->
</table>
</div>