   
 <div class="cuadroNewsLetters">
 <h1>Newsletters</h1>

 <form method="post" enctype="application/x-www-form-urlencoded" action="#" id="frBoletin">
 <div class="entrada">
    <input placeholder="Tu correo" id="tuCorreo" name="correo_newsletter" type="text" value="">
    <input type="submit" name="enviar_correo_boletin" value="Ok" id='enviarCorreoBoletin' class="botonFlecha">
 </div>
</form>

 </div>

<div class="cuadroOtrasHistorias" id='cuadroOtrasHistorias'>
   <h1>Historias para ti</h1>
<ul>
<!-- START publicaciones_ultimas -->
<li class="btCdroTema" id="tema_{id}" href='{url}'>
  <img src="{direccionsm}" id='fotoTema_{$n}' name="foto_tema[]" />  

<div class="areaTexto">
<h3>{frase}</h3>
<p>{descripcion}</p>
</div>

</li>
<!-- END publicaciones_ultimas -->
</ul>
</div>


<div class="barraEtiquetas">
  <ul>
   <!-- START etiquetas -->
     <li id="etiq_{id}">{etiqueta}</li>
       <!-- END etiquetas --> 
  </ul> 
</div>

<div class="cuadroComentarios"></div>

<div class="cuadroPublicidadFinal"></div>
      </div>
            </div>
      </main>
      <footer>
      </footer>
   </body>
</html>