<div class="formulario" id="frp_expresiones">
<form name="fr_expresiones" id="fri_expresiones" 
action="<?php echo BASE_URL; ?>sistema/configuracion/agregar_expresiones_imagen/" 
method="post" enctype="multipart/form-data">
	<fieldset>
		
		<legend>Expresi&oacute;n</legend>
	<span class="entrada">
		<label>Expresi&oacute;n</label>
		<input type="text" name="expresion" id="expresion" value="" />
	</span>




</fieldset>
<div class="slide">
	<input type="submit" name='enviar_expresion' id='enviarExpresion' value="Aceptar"/>
</div>

<input type='hidden' name='nm_id' id='nm_id' value=''/>
<input type='hidden' name='id_act' id='id_act' value=''/>
<input type='hidden' name='caso' id='caso' value=''/>
<input type='hidden' name='enviar_expresion' id='enviarHd' value='registrar'/>

</form>
</div>