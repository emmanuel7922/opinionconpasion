<span id="pnl_us_din">
{panel_usuarios}
</span>


<h1 class="tit" ></h1>


<p class="textEnorm" id="mensajeInicialSuperior"><b style="color:#EF5556;"></p>
<div class="img_complet" id="imgMediaPrin">

<a href="#" class="btPerfil" id="btPerfilIni">Mi cuenta</a>
<div class="lienzo" id="lienzoLogin"><a href="#" class="cerrar" id="cerrarFrLogin">X</a>

<form method="post" class="form-control" enctype="application/x-www-form-urlencoded" 
action="<?php echo $_SERVER['PHP_SELF']; ?>" name="fr_login" id="friLogin">
	<fieldset><legend>Ingreso al sistema</legend>
	<input type="text" name="id_usuario" id="idUsuario" value="" class="fa fa-1x" placeholder="&#xf007; Usuario">

<input type="password" name="password" id="password" value="" class="fa fa-1x" placeholder="&#xf023; Password">
<input type="hidden" name="autenticar_usuario" value="ok"/>
<input type="submit" name="bt_iniciar_sesion" id="enviarDatosUsuario" 
class="fas fa-sign-in-alt fa-1x" value="Ingresar"  /> 


</fieldset>
</form>

</div>
</div>
