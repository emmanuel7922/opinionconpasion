<div class="panelDinamico panelControlInicial  " id="panelUsuarioIni">
<a href="#"  class="etiquetaUsuario" ><i class="fas fa-user-circle fa-2x"></i><span>{correo_electronico}</span></a>	

<div class="lienzo lienzo-interior"  style="" id="cntPanelInicio">

<ul class="listaConcepto listaOscuraVertical" id="accesosOpciones">
<li class="sel" >
	<h1 class="margen_0px " > 
		<a href="#" class="" id="accRpd" >
		<i class="fa fa-bolt fa-3x"></i><span class="negrita texto-24px">Acceso rapido</span>
		</a>     </h1>

</li>
<li class="">
	<h1 class="margen_0px ancho300">
	<a href="#" class=""  id="accAvn">
	<i class="fa fa-list-alt fa-3x"></i><span  class="negrita texto-24px">Avanzado</span></a> </h1>
	</li>
</ul>

<span class="ancho-540px margen-izq-20px margen-top-10px gpo" id="gpoAccesos">
 <ul class="menuVertical margen_0px ancho100xc " id="menuSimpleIni">
<li class="btSel"><a href="#" class="color-ccc" id="iNVnt"><i class="fa fa-cash-register fa-2x"></i><span class="texto-20px">Nueva venta</span></a></li>
<li class="bt"><a href="#" class="color-ccc" id="iACli"><i class="fa fa-user-plus fa-2x"></i><span class="texto-20px">Agregar cliente</span></a></li>	
</ul>	

<ul class="menuVertical margen_0px ancho100xc libreIzquierda" id="menuAmpliadoIni">
<li class="bt"><a href="#" class="color-ccc" id="iSPro"><i class="fas fa-clock fa-2x"></i> <span class="texto-20px"> Servicios pr&oacute;ximos</span></a></li>
<li class="bt"><a href="#" class="color-ccc" id="iPAct"><i class="fab fa-cc-visa fa-2x"></i>	<span class="texto-20px">Promociones actuales</span></a></li>
<li class="bt"><a href="#" class="color-ccc" id="iLCli"><i class="fa fa-address-card fa-2x"></i><span class="texto-20px">Listado clientes</span></a></li>
</ul>
 </span>

<span class="ancho-540px margen-izq-5px margen-top-10px gpo" id="gpoFormularios">
<div class="formulario ancho-500px " id="formularioVenta">
<fieldset>	<legend>Venta</legend>
<form action="<?php echo BASE_URL; ?>sistema/operacion/realizar_venta" 
method="post" name="fr_venta" id="frVenta_async" enctype="application/x-www-form-urlencoded">

<span class="entrada entrada-libre-izq" >
<i class="fas fa-2x" style="transform:rotate(90deg)">&#xf3ff;</i>
	<input type="text" id="notaVentaTxt" class="input_desvanecido" value="" placeholder="Nota de venta" readonly="readonly" />	
	<input type="hidden" name="nota_venta"  id="notaVenta" value=""  maxlength="12" class="imp input-170px"/>
	</span>
	
<span class="entrada"> 
<i class="fas  fa-2x">&#xf073;</i>
<input type="text" id="fechaDeVenta" name="fecha" placeholder="Fecha de venta" value="" class="input_desvanecido" readonly="readonly" />
</span>

<span class="entrada entrada-libre-izq"> 
<i class="fas  fa-2x">&#xf073;</i>
<input type="text" id="fechaEntrega" name="fecha_entrega" placeholder="Fecha de entrega" value="" />
<p class="oblig" for="fechaEntrega" id="fecha_entrega_oblig_fecha" >Campo obligadorio</p>
</span>


<span class="entrada">
<i class="fa  fa-2x">&#xf017;</i>
<input type="text"  value="" id="horaEntrega" name="hora_entrega" placeholder="Hora entrega" maxlength="5" class="ancho120"/>
</span>
<span class="entrada">
<i class="fas fa-2x">&#xf183;</i>	
	<input type="text"  value="" id="cliente_entrada" name="cliente" placeholder="Nombre del cliente"/>	
	
</span>


<div class="gpo ancho100pc" id="capaServicios">
<div id="din-srv">{sel-srv}</div>

<!--	<div class=" relativo posicionIzquierda ancho96xc altura-40px  oculto-libre" id="herrCSrv">
		<a class="mas" id="agregarServicioALista">+</a>	
		</div>	-->
					<span class="cajaSeleccion" id="cajaSeleccion">
				<!-------CUADRO DE BÚSQUEDA----------------------------->	
                <div class="cuadroBs  ancho90xc " id="cuadroBsSrv">
			<!--	<a class="icoRegresar  margen-derecha-20 absoluto posicionDerecha" href="#" id="regresarAListado"></a>-->
	<span class="entrada">
	<i class="fas fa-search fa-2x" ></i>
	<input type="text" id="textoBusquedaSrv" name="texto_busqueda_srv" value="" autocomplete="off" placeholder="Buscar..." class="" />
	
	</span>
			</div>
<ul id="seleccion_servicio">

</ul>
	<!-- CONTENEDOR DE RESPUESTAS AJAX -->
				<div id="contenedor_formulario_serv">
					
				</div>
				<!-- CONTENEDOR DE RESPUESTAS AJAX -->	
			</span>
			
			<div id="concentradoServicios" class='ltabla'>

			<div class="linea">
				<h1 class="med">C&oacute;digo</h1>
				<h1 class="chi">Cant.</h1>
				<h1 class="chi">Precio</h1>
				<h1 class="gra">Unidad de medida</h1>
				<h1 class="gra">Descripci&oacute;n</h1>
			</div>	</div></div>
			
<!--

	<h1 class="h1Pestana" id='ptn3'><b>3</b>Finalizar venta</h1>
-->	

<span class="slide " id="mrgBtBig">
<a id="btFinalizarServicios" href="#" class="btBig">Continuar</a>
</span>		
		<div class="cajaDatos" id="cajaDatosObsv">

			<div class="emergenteAbono" id="emergenteAbonoCaja">
				<input type="text" name="abono_sobre_venta" id="abonoSobreVenta" value="" maxlength="4" />
				<a href="#" id="accCerrarVtnAbono" class="absoluto posicionDerecha"></a>
				<a href="#" id="accAgregarAbono" ></a>
			</div>

			<ul class="listaSeleccion" id="listaStatusVenta">				
						<!-- START status_opciones -->
					<li class=""><input type="radio" name="status[]" value="" id="stat_{id}"  {status_chk_{id}}   /><a href="#" id="{id}">{status}</a></li>
						<!-- END status_opciones -->			
			</ul>
		
			<div class="cuadroObservaciones">
				
				<span class="entrada">
				<label>Ubicaci&oacute;n</label>
					<textarea name="ubicacion" id="ubicacion">{ubicacion}</textarea>
				</span>

				<span class="entrada">
				<label>Observaciones</label>
					<textarea name="observaciones" id="observaciones">{observaciones}</textarea>
				</span>
			</div>

			<ul class="listaEntradas"  id="capaDinero">
							
			<li>
				<label>Descuento</label>
				<input  type="text" name="descuento" id="descuento_gral" value="0" />
			</li>
			

				<li>
				<label>Total</label>
				<input type="text" name="totalBruto" id="ttotalBruto" value="{total}" readonly="readonly"  />
			</li>
			<li><label>IVA</label>
            <input type="text" name="iva" id="iva" value="0" />
			</li>
			<li>
				<label>Total Neto</label>
				<input type="text" name="totalNeto" id="ttotalNeto" value="{total}" readonly="readonly" />
			</li>
			<li></li>
			<li></li>
			<li>
			<label>Abono</label>	
      <input type="text" name="monto_abono_tx" id="montoAbonoTx" value="" readonly="readonly" />
	
			</li>
			<li>
			<label>Saldo</label>
       <input type="text" name="salto_total" id="saldoTotal" value="0" readonly="readonly" />
			</li>
			</ul>	
			</div>

			
		
		<div class="slide" id="areaBtnVenta">
			<input type="submit" name="enviar-venta" id="enviar-venta" value="{submit}"/>
		</div>

<input type="hidden" id="montoAbono" name="abono" value="" />
<input type="hidden" id="totalNetoReal" name="total_neto_real" value="0" />		
<input type="hidden" name="status" value="" id="stat" />	
<input type="hidden" name="realizar_venta" id="realizar_venta" value="ok"/>
<input type="hidden" name="hora" id="hora" value="{hora}"/>
<input type="hidden" name="id_cliente" id="id_cliente" value=""/>
<input type="hidden" name="id_vnt" id="id_vnt" value="{id_vnt}"/>
	


</form>
</fieldset>
</div>
</span>
</div>



</div>


