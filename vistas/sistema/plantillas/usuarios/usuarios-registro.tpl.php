<div class="formulario"  id="fr1">
<form   id="fr_registro_usuario"  name="fr_registro_inicio"   method="post"  action=""   enctype="application/x-www-form-urlencoded">

<fieldset><legend>Registro de usuario</legend>
<!--#USUARIOS-->

<!-- START registros -->

<!--Usuario-->


<!--#USUARIOS_PERSONAL-->
<span class="entrada">
<label>Nombre personal</label>
<input type="text"  id="nombres" name="nombres" value="{nombres}"  />
</span>

<span class="entrada">
<label>Apellido</label>
<input type="text"  id="apellidos" name="apellidos" value="{apellidos}" txt="Apellidos"/>
</span>

<span class="entrada entrada-sola">
<label>Sexo</label>
<select name="sexo"   id="sexo" >
	<option value="">::Sexo::</option>
	<option value="f" {selected_sexo_f}>Femenino</option>
    <option value="m" {selected_sexo_m}>Masculino</option>
</select> 
</span>

<!--#USUARIOS_DIR-->
<span class="entrada">
<label>Tel&eacute;fono personal</label>
<input type="text"   id="telefono"  name="telefono" value="{telefono}"     />
</span>

<span class="entrada entrada-sola">
<label>Correo personal</label>
<input type="text"    id="usuario"  name="usuario"  value="{correo}"  />
</span>

<!--Password-->
<span class="entrada entrada-sola">
<label>Password</label>
<input type="password"    id="password" name="password" value=""     title="Password"  />
</span>
<!--Permisos-->
<input type="hidden"  id="admin"   name="admin"    value="0" />
<input type="hidden"  id="activo"   name="activo"    value="1"   />
<input type="hidden"  id="restringido"   name="restringido"    value="0"  />

<input type="hidden"     id="id_us"   name="id_us"  value="{id_us}"  />

<input type="hidden"     id="asunto"   name="asunto"  value="registro_sistema"  />

<div class="slide">
<input type="submit"     id="iniciarIni"  class="btSesion"   name="registrar-usuario"  value="{submit}"  />
</div>
<!-- END registros -->
</fieldset>
</form></div>
{bt-ini-ses}