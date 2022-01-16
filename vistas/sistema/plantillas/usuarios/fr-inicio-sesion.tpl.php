<div class="formulario" id="fr_sesion_inicio">
	<span class="controlesVentana"><a class="icoCerrar"></a></span> 
	<form id="fr_sesion_inicio_sync" name="fr_sesion_inicio" action="<?php echo BASE_URL; ?>sistema/usuarios/iniciar_sesion" enctype="application/x-www-form-urlencoded" method="post">
		<fieldset><legend>Inicio de sesi&oacute;n</legend>
		
<span class="entrada">
	<label>Nombre de usuario</label>
	<input type="text" name="usuario" id="usuario" value="{usuario}"/>
</span>
<span class="entrada">
	<label>Contrase&ntilde;a</label>
	<input type="password" name="pass" id="pass" value="{pass}"/>
</span>

<input type="hidden" name="autenticar_usuario" value="ini"/>
<input type="hidden" name="gpo" value="sistema_administrativo"/>
<input type="hidden" name="url" value="sistema"/>

<div class="slide">
	<input type="submit" type="submit"  id="bt_iniciar_sesion" class="btSesion" name="bt_iniciar_sesion" value="Iniciar Sesi&oacute;n" />
</div>
</fieldset>
	</form>
</div>