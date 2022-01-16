<!DOCTYPE html>
<html>
   <head>
      <title class="titleMain">{encabezado}</title>

<script  type="text/javascript" src="<?php echo BASE_URL; ?>vistas/basica/js/jquery/jquery-3.2.1.js" ></script> 
<script type="text/javascript">

window.onload=function(){

var root = location.protocol + '//' + location.host;   
if(root.indexOf("localhost")!=-1 || root.indexOf("192.168")!=-1){root+="/tudiquesi/public_html";}


if(document.getElementById("titTemaAmp")){
   $("#imgPrinPub").fadeOut();
   setTimeout(function(){
   $.get(root+"/sistema/publicaciones/relacionar_publicaciones/","rcp=img_prin_tma",function(r){
var src=r[0].ini[0].img;
var descripcion=r[0].ini[0].descripcion;

document.getElementById("imgPrinPub").setAttribute("src",src);
document.getElementById("descrImg").innerHTML=descripcion;

$("#imgPrinPub").fadeIn();
   },"json");   
   },4000);
   
}



var enviarCorreoBoletin=function(e){
e.preventDefault();
var datos=$("#frBoletin").serialize();
$.post(root+"/procesar_correo_boletin/",datos,function(r){

},"json");

};

var btn=document.getElementById("enviarCorreoBoletin");
    btn.addEventListener("click",enviarCorreoBoletin);

if(document.getElementById("cuadroOtrasHistorias")){
   
}

};

</script>

<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL; ?>vistas/basica/css/general.css">
<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL; ?>vistas/basica/css/articulo.css">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5928806444074184"
     crossorigin="anonymous"></script>     
   </head>
   <body> 
      <header>
      	<div class="amplio">
      		<div class="contenedorSuperior">
               <a href="#" class="logo"></a>
      			
      			<div class="anuncio">
               <ul class="menuSuperior">
            <li><a href="#" id="btInicio">Inicio</a></li>
            <li><a href="#" id="btContacto">Contacto</a></li>
         </ul>
               </div>
      		</div>   
        <div id="gpoEncabezados" class="borde">
        
    <span class="encabezado1"> 
    <h2 id="subTitTema">{subtitulo}</h2>  
    <h1 id="titTemaAmp">{encabezado}</h1> 
   </span>   
       
   </div>

     </div>
      </header>