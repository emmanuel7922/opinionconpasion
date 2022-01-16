<div class="cuadroBs" id="cuadroBs">
	
    <div class="globo"><blockquote>{ayu}</blockquote></div>
	<form method="post" action="{action_bs}" id="sync_frBsCodigo" name="frBsCodigo">
   
    <span id="bscriterio"><label>Buscar por</label>
    <select name="criterio" id="criterio">
    <!-- START criterios -->
    <option value="{valor}">{etiqueta}</option>
    <!-- END criterios -->
    </select>
    </span>
    
	<span class="entrada"><label for="textoBusqueda" id="titbus" tabindex="1">{titbus}</label>
	<input type="text" id="textoBusqueda" name="textoBusqueda" value="" autocomplete="off"/>
	<!--<input type="submit" name="enviarCdg"  id="btCdg" value="Buscar"  />-->
	<a class="icoMostrarPanelImg" id='icoMsPanelImg'></a>
	</span>
	
	</form>
</div>

<div id="dinambus">{lst}{frm}</div>

