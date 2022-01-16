<div class="listadoGeneral" id="listadoGeneralUsuarios">
<table id="despliegueListaUsuarios">
<tbody >
<tr>
<th>Ord.</th>
<th>Nombres</th>
<th>Apellidos</th>
<th>ID</th>
<th>- + -</th>
</tr>
<!-- START registros -->
<tr>
<td>{n}</td>
<td>{nombres}</td>
<td>{apellidos}</td>
<td>{nomusr}</td>
<td>
<a href="<?php echo BASE_URL.CRP_SIST; ?>usuarios/eliminar_usuario/?id_us={ID}" id="eliminar_us" class="rowElim"></a>
<a href="<?php echo BASE_URL.CRP_SIST; ?>usuarios/modificar_usuario/?id_us={ID}" id="modificar_us" class="rowEdit"></a>
</td>
</tr>
<!-- END registros -->
</tbody>
</table>
</div>