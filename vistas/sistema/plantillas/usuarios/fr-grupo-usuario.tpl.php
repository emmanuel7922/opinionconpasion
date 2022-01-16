<div class="formulario" id="panelGruposUsuario">
	<form name="fr-gpo-us" id="fri-gpo-us" method="post" enctype="application/x-www-form-urlencoded" action="">
	<fieldset><legend>Grupos y usuarios</legend>	
		<span class="entrada">
			<label>Usuarios</label>
			<select name="usuario" id="slct_us_gpo_us">
				<option value="">::Usuarios::</option>
			<!-- START Usuarios -->
			<option value="{ID}" {{ID}_selected}>{nomusr}</option>
	        <!-- END Usuarios -->	
			</select>
		</span>
		<ul class="cjt_check_hrz" id="{conjunto_gpos}">
			<!-- START Grupos -->
			<li class="par ancho280">
			<span class="fila"><input type="checkbox" name="grupo[]" value="{id}" id="chk_{id}"  {{id}_chk}/>{nombre}<label class="tapa" for="chk_{id}"></label></span>
			<span class="fila"><input type="checkbox" name="admin[{id}]" value="1" id="chk_prf_{id}"  {{id}_chkadmin}/><label class="tapa" for="chk_prf_{id}" id="lb_{id}"></label>Administrador</span>
	        </li>
	        <!-- END Grupos -->	
		</ul>
		<div class="slide">
			<input type="submit" name="agregar-gpo-us" value="Agregar"/>
		</div>
</fieldset>
	</form>
</div>