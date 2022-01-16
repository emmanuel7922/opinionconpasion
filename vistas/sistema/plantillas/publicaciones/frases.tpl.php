<?php  

$url= BASE_URL."sistema/publicaciones/agregar_tema/"; 
?>
<div class="panelArchivos gpo-plegado-izquierda">
<ul class="menuPanel"><li class="sel"><a href='#'>Texto</a></li><li class="bt"><a href='#'>Imagen</a></li></ul>
<div class="lienzo">
<div class='formulario' id='frmFrase'>  

<!-- CARGA DE ARCHIVO -->
    <div class="barraCargaImg" id='barraCargaImg'>
    <a href='#' id='agregarImagenABase' class="agregarImagen">+</a>
    <input type="file" id="inputArchivo" name="archivo" value="" style="opacity:0">
    <img id='imagenCargada' name='imagen_carga' src='' class="imagenMuestra" />
    </div>
<!-- CARGA DE ARCHIVO -->

<span id='cdroBus'>
{cdro_bus}
</span>   

<form action="<?php echo $url; ?>"  method="post" enctype="multipart/form-data" id='frFrase_async' name='fr_frase' >
<fieldset>
<div class='gpo' id='titFrFrases'> 
<a href="#" id='inptFraseBtn' class="btnInternoFrm"></a>	
   <!-- <a href="#dinMarcoArch" id="accCargarImg"><img id='imgCargarImg' src="<?php echo BASE_URL; ?>vistas/sistema/img/iconos/ico_imagen.png" /></a> -->
<h1 class='titSm'>Nuevo tema</h1>
<ul class="listaConcepto ancho90x100">    

<li class="ancho100xc">
<h1 style='width:200px; height:100px;' class="cuadroFrase"> </h1>
<div class="gpo gpo-plegado-izquierda " style=' width:480px !important; height:100px !important;'>    

<span class='entrada ancho90x100' > 
  <label>T&iacute;tulo</label><input type='text' name='frase' id='inptFrase' value=""  class='estilo_punteado_grueso ancho-400px'/>
  <label>Subt&iacute;tulo</label><input type='text' name='subtitulo' id='subFrase' value=""  class='estilo_punteado_grueso ancho-400px'/>
  <input type="hidden" name="url_frase" id="urlFrase" value="" class='estilo_lineal_grueso ancho-400px fondoAzul'/>     

</span>

</div>    
</li>

<li class="ancho100xc"> 
<h1  class="cuadroResumenTxt"></h1>
    
<div class="gpo  gpo-plegado-izquierda" style='height:100px;'>
   
<span class='entrada_amplia libre-izquierda ' > 
    
<textarea name='descripcion' id='inptDescripcion' class="estilo_punteado_grueso">Resumen</textarea> 
</span>
</div>    
</li>
<li>
<h1 style='width:200px; height:300px;' class="cuadroAnalisis"></h1>        
<div class="gpo  gpo-plegado-izquierda" style='height:100px;'>
<span class='entrada_amplia libre-izquierda'>
  
<textarea name='analisis_personal' id='analisisPersonal' class=" estilo_punteado_grueso" style='height:300px !important;'>En primer lugar...</textarea>
</span>
</div>    
</li>    
<!--
<li>
<h1 style='width:200px; height:100px;' class="cuadroNoticia"></h1>
<div class="gpo gpo-ancho65-100 gpo-plegado-izquierda" style='height:100px;'>    
<span class='entrada_amplia libre-izquierda'>
<label class='texto_grueso'>Comentario sobre nota relacionada</label>    
<textarea name='nota_relacionada' id='notaRelacionada' class="estilo_punteado_grueso">En temas relacionados...</textarea>
</span>     
    </div>    
</li>    
 -->


   <!-- 
<li>   
<h1 style='width:200px; height:100px;' class="cuadroJuicio"></h1>    

<div class="gpo gpo-ancho65-100 gpo-plegado-izquierda" style='height:100px;'>
    
<span class='entrada_amplia libre_izquierda' > 
<label class="texto_grueso">Acerca de la calificaci&oacute;n de la informaci&oacute;n</label>
<textarea name='comentario' id='comentarioPositivo' class="estilo_punteado_grueso">Se determin&oacute; que... </textarea>
</span>
    </div>    
</li>
-->
<li>   
<h1 style='width:200px; height:100px;' class="cuadroAcademico"></h1>    

<div class="gpo  gpo-plegado-izquierda" style='height:100px;'>
    
<span class='entrada_amplia libre-izquierda altura-100px'> 

<textarea name='contribucion' id='contribucion' class=" estilo_punteado_grueso">En alguna ocasión...</textarea>
</span>
</div>
</li>
     
</ul>
</div>

<div class='gpo' id='titClsf'>
<h1 class='titSm'>Clasificaci&oacute;n</h1>
<span class='entrada libre-izquierda'>
<label >Categoria</label>
<select name="categoria" id='categoria' class='ancho120'></select>
</span>

<span class='entrada'> 
<label >Calificaci&oacute;n</label>
<select id='calificacionTema' name='calificacion_tema' class='ancho120'>>
<option value="1">Irrelevante</option>
</select>
</span> 

<span class='entrada'>
<label >Publicar</label>
<select name="publicar_texto" id='publicarTexto' class='ancho120 '>
<option value="0">No</option>
<option value="1" selected='selected'>Si</option>    
</select>
</span>
</div>


<div class='slide'>
<input type='submit' name='enviar_tema' id='enviarTema' value='Aceptar'/>
</div>

<input type="hidden" name="act" value="rgt_tma_smpl">
<input type='hidden' name='nm_id' id='nm_id' value=''/>
<input type='hidden' name='id_act' id='id_act' value=''/>
<input type='hidden' name='caso' id='caso' value=''/>
</fieldset>
</form>
</div>
</div>
</div>