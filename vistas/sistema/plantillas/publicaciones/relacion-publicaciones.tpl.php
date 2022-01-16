<div class="formulario ancho-500px fondo-999" id="frPublicRel">
	<fieldset><legend>Publicaciones relacionadas</legend>
<form enctype="application/x-www-form-urlencoded" method="post" id="frPublicacionesRel" action="<?php echo BASE_URL; ?>sistema/publicaciones/relacionar_publicaciones/" name="publicaciones_rel">
<div class="entrada">
	<label>Publicaci&oacute;n</label>
	<select name="tema" id='temasPrinRel'>
<option value="">::Temas::</option>		
		<!-- START registros -->	
<option value="{id}">{frase}</option>
		<!-- END registros -->
	</select>
</div>

<div class="expandibleVert lienzo libre ancho-400px altura-200px">
	<ul  class="listaChk listaSm" >
		<!-- START registros2 -->	
<li id="tema_relacionado_{id}">
	<label>{frase}</label>
	<input type="checkbox" name="opt_tema[]" id="optTema_{id}" value="{id}" for='tapa' />
	<span class="tapa"></span></li>
		<!-- END registros2 -->
    </ul>
</div>
	

<span class="slide">
<input type="submit" name="enviar_relacion" id="enviarRelacion" value="Guardar" class="">
</span>

</form>
</fieldset>
</div>
