<div class='controlesEdicionImagen' id='controlesEdicionImagen' >

<ul class='menuEdtImg'>
<li class='btimg'><a class='rct'></a></li>
<li class='btimg oculto' id='btImptxtImg'><a class='txt' ></a></li>
<li class='btimg'><a class='imgp'></a></li>
</ul>

<div class='formulario ancho180' id='frRctImg'>
<form name='frm_ctrl_edit_img' id="frmCtrlEditImg" method='post' action="" enctype="application/x-www-form-urlencoded">
<fieldset id='fieldEdImg'>
<legend>Ajustar medidas</legend>
<span id='controlesEdicionImagenCnt'>

<span class='entrada'><i></i><input type='text' name='ancho_img' value='600' id='anchoImagen' placeholder='Ancho'/></span>
<span class='entrada'><i></i><input type='text' name='alto_img' value='400' id='altoImagen' placeholder='Alto'/></span>
<span class='entrada'><select name='denominacion_imagen' id='denominacionImagen'><option>::Formato::</option></select></span>

<span class='entrada'>
<select name="opcion_imagen" id="opcionImagen">
<option value='img_fnd' >Imagen de fondo</option>
<option value='img_imp' >Imagen impresa</option>
</select>
</span>

<div class='slide'><input type='submit' name='guardar_imagen' id='guardarImagen' value='Guardar' class=''/></div>

</span>
</fieldset>
</form>
</div>

<div class='formulario ancho180' id='frTxtImg'>

<form name='frm_ctrl_txt_img' id="frmCtrlTxtImg" method='post' action="" enctype="multipart/form-data">
<fieldset>
<legend>Insertar texto</legend>

<span class='entrada'> 
<select id="optTipoTexto">
<option value="">::Fuente::</option>
<option value="no_stress">No Stress</option>
<option value="organo">Organo</option>
<option value="ambleregular" >Amble (regular)</option>
<option value="amblebold" selected="selected">Amble (Bold)</option>
<option value="bowlby_one" >Bowlby one</option>
<option value="moon" >Moon</option>
<option value="cascadia" >Cascadia</option>
<option value="candal" >Candal</option>

</select></span>

<span class='entrada'> 
<input type="number" id="optTamano" name="tamano" min="5" max="100" value="17"></span>

<span class='entrada libreIzquierda'>
<label class='libreIzquierda'>Color  del texto</label>
<input type="color" name="color" id="optColor" value="#333333">

</span>


<span class='entrada libreIzquierda'>
<label class='libreIzquierda'>Color de fondo del texto</label>
<input type="color" name="color_fondo_texto" id="colorFondoTxt" value="#f7f3d7">
</span>
</fieldset>

</form>
</div>

</div>
<span id='marcoExpresion'></span>
<span class='receptorTexto' id='receptorTextoImgPrevia'>

<div class="manija" id="manijaIzquierda">
<div class='herr' id="herrTextoImg">
<a href="#" class="btok fndVerde" id="okActualizar">OK<a/>
<a href="#" class="btok fndAzul desabil" id="guardarTxtImg">Guardar<a/>


</div>
</div>

<span class='textoInvisible' id='textoInvisibleCnt'>

<ul class='txt' id='txtDin'>
<li class="buffer" id='bufferTxt300'></li>
<li class='linea' id='linea1'></li>
</ul>

<small id="datPx"></small>
</span>

<input type="hidden" name="txt_tmp_1" id="txtTmp_1" value=""/>
<input type="hidden" name="txt_tmp_2" id="txtTmp_2" value=""/>
<input type="hidden" name="txt_tmp_3" id="txtTmp_3" value=""/>
<input type="hidden" name="txt_tmp_4" id="txtTmp_4" value=""/>
<textarea id='txtDinCompleto' rows="4"></textarea>


<!--
<textarea name='texto_sobre_imagen'  cols="20" rows="1" /></textarea>-->
</span>

<span class="panelFlotanteImgs" id="panelFlotanteImgs">
<h1>Listado de imágenes vinculadas</h1><a href='#' class='cerrar' id="cerrarFloat">X</a>
<span class='lienzo' id="cntImgPF">

</span>
<span>

<span class='cuadroRecorteImgSobre' id="cdroRecorteImgSbr">
</span>

<span class='imagenSobre' id='imgSbr'>
</span>
