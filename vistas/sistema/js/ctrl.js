//PARA REVISAR RÁPIDO PONER Y BUSCAR LA CLAVE : "PUNTO_CHEQUEO"
var carga_funct={"fc":[function(){


 var inix= new Basica();



	}]};
	
window.onload=function(){
  

/*
function toDataURL(url, callback) {
  
$.ajax({
            url:url,
            cache:false,
            contentType:false,              // El tipo de contenido utilizado al enviar datos al servidor. El valor predeterminado es: "application / x-www-form-urlencoded"
            processData:false,
            xhrFields:{
                responseType: 'blob'
            },
            success: function(r){
                 var fileReader = new FileReader();
                  fileReader.onloadend = function() {
                   callback(fileReader.result);           
                                                     }
                  fileReader.readAsDataURL(r);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                alert("error");
            }
        });
            

         };

 

         toDataURL('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jose_Lopez_Portillo_new.jpg/220px-Jose_Lopez_Portillo_new.jpg', function(dataUrl) {
         
         document.write('<span>Result in string:</span>', dataUrl) 
      });
*/

window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){ event.preventDefault();}
}, false);
    
var src=undefined;
/*
    setInterval(function(){ 
    $('script').each(function() {
        src=$(this).attr('src');
        
    if (src.indexOf("sistema/js/ctrl.js")!=-1 ) {
        var old_src = $(this).attr('src');
        $(this).attr('src', '');        
        $('script[src="' + src + '"]').remove();
            
          $(this).attr('src', src).appendTo('head');
        console.log("Se han recargado  documentos javascript!");
       // location.reload();
            //($(this).attr('src', old_src + '?'+new Date()); 
    }
});}, 10000);
  */  
var bs= new Basica();
bs.arrancar();

};



function Basica(){
CTRL_FRM={};
CTRL_FRASES={};    
var vars={

};

vars.inpt=undefined;

var sto=0;

var enviarArchivoLocalAServidor=function(e){ 
var input=document.getElementById("inputArchivo");
    var  files = e.target.files[0];

    var fReader = new FileReader();
fReader.readAsDataURL(input.files[0]);
$("#barraCargaImg").css({"height":"160px",width:"250px"});
fReader.onloadend = function(event){

    var img = document.getElementById("imagenCargada");
    img.src = event.target.result;
    var img_url=img.src;
    $("#imagenCargada").css("display","block");
    var ruta=root+"sistema/publicaciones/enviar_datos_imagen_local_servidor/";
    var data=$("#sync_frBsCodigo").serialize();

var form = document.getElementById("sync_frBsCodigo"); // You need to use standard javascript object here
var formData = new FormData(form);

    $.ajax({
        url:ruta,
        data:formData,
        type:'POST',
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false,
        success:function(r){}
});

    setTimeout(function(){
      
        $("#barraCargaImg").animate({height: "60px",width:"50px"}, 500);
        $("#imagenCargada").css("display","none");
    },9000);
    
                                 }


     
  

}    

var activarFile=function(e){
e.preventDefault();

$("#inputArchivo").trigger("click");
$("#inputArchivo").unbind("change",enviarArchivoLocalAServidor);
$("#inputArchivo").bind("change",enviarArchivoLocalAServidor);

};


var revisarLongitud=function(e){
	var max=CTRL_FRM.max_longitud;
       var obj=this;
       var valor=$(obj).val();
      if(valor.length>max){
      	var nuevoValor=valor.substr(0,max);
      	$(obj).val(nuevoValor)
      	return false;

      }

        };
CTRL_PUB={};
CTRL_PUB.idmin=undefined;
  var root = location.protocol + '//' + location.host+"/";
  if(root.indexOf("localhost")!=-1 || root.indexOf("laweb:81")!=-1 || root.indexOf("192.168")!=-1)
  {root+="tudiquesi/public_html/";}
//alert(root);
var tmEnvioDat=0;
    var fx=new Funciones();		
    fx.asignarCarpetaRaiz("tudiquesi");
	var padre=this;	



  var enviarTemaModoSimple=function(e){
e.preventDefault();

if(document.getElementById("inptFrase").value!=""){

var inptFrase=$("#inptFrase").val();
//
var datosFrm=$("#frFrase_async").serialize();
$.post(root+"sistema/publicaciones/agregar_tema/",datosFrm,function(r){
  var id=r[0].ini[0].id;
padre.mostrarAccesoEdicionImagen(id);
},"json");

}else{
  alert("Escriba una frase inicial... ");
}

};
	


    var enviarImagenAServidor=function(e){
e.preventDefault();
var obj=this;
var id=$(obj).attr("id");
var iden=id.substr(id.indexOf("_"));
var idfrm="frPrevia"+iden;
var datFr=$("#"+idfrm).serialize();
$("#panelBusqueda").fadeOut();


$.post(root+"sistema/publicaciones/enviar_datos_imagen_servidor/",datFr+"&act=rgt_cpy",function(r){

if(r[0].ini[0].res==true){
  $("#previa"+iden).fadeOut();
  CTRL_PUB.idprv="previa"+iden;
  $("#back").fadeOut();
  /*
  var idMin=CTRL_PUB.idmin;
  var nidimg=idMin.substr(idMin.indexOf("_"));
  var idimg="img"+nidimg;
$("#"+idimg).attr("class","miniatura");
  $("#"+idMin).append($("#"+idimg));
*/
  alert("Archivo guardado");
  $("#inptFrase").focus();
}else{
  alert("No se ha podido guardar el archivo, intente con otro.");
}
},"json");

};

var clickCuadroMiniatura=function(e){
    
        var prt=this;
        var idHid=$(prt).find("input:hidden").attr("id");
        var nIde=idHid.substr(idHid.lastIndexOf("_")+1);        
        var url=$("#"+idHid).val();
        e.preventDefault();

       $("#back").fadeIn();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
       $(".previa").remove();
       if(!document.getElementById("previa_"+nIde)){
       $("body").append("<div class='previa' style='z-index:2989898989833398898'  id='previa_"+nIde+"'><div id='cnt-prv'></div></div>");
                                                   }

if(!document.getElementById("frPrevia_"+nIde) ){
  
$("#cnt-prv").append("<form id='frPrevia_"+nIde+"' name='fr_previa' action='"+root+"sistema/publicaciones/copiar_imagen_de_internet/' method='post' enctype='application/x-www-form-urlencoded'><iframe src='"+url+"'></iframe></form>");
                                                }

var ancho=parseInt($("#previa_"+nIde).css("width"));
        var lft=-512;
       
        var stil=$("#previa_"+nIde).attr("style");
        var stilo="margin-left:"+lft+"px !important; width:1024px; height:600px;   margin-top:20px !important; top:0px; left:50%; "+stil;


        $("#previa_"+nIde).attr("style",stilo);
        $("#previa_"+nIde).fadeIn();


/*
$.get(root+"sistema/publicaciones/recuperar_url/","rgt=url_img&data="+url,function(pag){
$("#frPrevia_"+nIde).html(pag);
//$("#frPrevia_"+nIde).html(html);


var img_gpo=undefined;
var n=0;

for(var x=0;x<r.length;x++){
  for(var y=0;y<r[x].ini.length;y++){
   n++;
   img_gpo=r[x].ini[y].img;

var totalImg=img_gpo.length-1;
var i=0;
for(var p=0;p<totalImg;p++){
    i++;
$("#frPrevia_"+nIde).append("<div class='cuadroImg' id='cdro_img_"+i+"'></div>");
$("#cdro_img_"+i).append(img_gpo[p]);
                            }
                                    }
                          }

var imgAgregada=0;

setTimeout(function(){
var src=undefined;
var id=undefined;
var imgsEnc=$("#frPrevia_"+nIde).find("img");

$.each(imgsEnc, function(i, img) {

if($(img).attr("data-src")!=""){
  src=$(img).attr("data-src");
  if(src!=undefined){
  src.replace('src="//','src="https://')
  $(img).attr("src",src);
}
}

if(src!=undefined){
  src.replace('src="//','src="https://')
  $(img).attr("src",src);
  }
  
    
var txt=CTRL_FRASES.txt;
var txt2=txt;
var txt3=txt;
var src_txt=$(img).attr("src");
var alt_txt=$(img).attr("alt");
if(src_txt!=undefined){src_txt = src_txt.toLowerCase();}
if(alt_txt!=undefined){ alt_txt = alt_txt.toLowerCase();}

txt.replace(" ","_");
txt2.replace(" ","-");



if(  ((src_txt!=undefined && src_txt.indexOf(txt)==-1) && (alt_txt!=undefined && alt_txt.indexOf(txt)==-1)) 
  && ((src_txt!=undefined && src_txt.indexOf(txt2)==-1) && (alt_txt!=undefined && alt_txt.indexOf(txt2)==-1) ) 
  && ((src_txt!=undefined && src_txt.indexOf(txt3)==-1) && (alt_txt!=undefined && alt_txt.indexOf(txt3)==-1) ) ){
 
if(parseInt($(img).width() ) <700 ){ $(img).parent().remove();   }

}

else{
  console.log($(img).attr("alt")+"--"+$(img).attr("src"));

if(imgAgregada==0){
$(img).attr("style","border:2px dotted #f00;");
$(img).attr("id","img_gde_prin");
                  }
                  else{
      $(img).parent().remove();              
                  }
imgAgregada=1;
}


  });

},3000);


setTimeout(function(){

var n=0;


if($(img).attr("id")==undefined || $(img).attr("id")!="img_gde_prin"){
  
 // $(img).remove();
}
if(document.getElementById("frPrevia_"+nIde) ){
  
  var hijosFr=document.getElementById("frPrevia_"+nIde).childNodes;
  var i=0;
for(var hh=0;hh<hijosFr.length;hh++){
    
if($(hijosFr[hh]).prop("tagName")=="DIV" && $(hijosFr[hh]).attr("class")=="cuadroImg"){

if(hijosFr[hh]!=undefined){
i++;
var ancho =$(hijosFr[hh]).find("img").attr("width");
if(ancho!=undefined){
if(ancho<200){
    $(hijosFr[hh]).remove();
}}
  var src=$(hijosFr[hh]).find("img").attr("src");
  var data_srcset=$(hijosFr[hh]).find("img").attr("data-srcset");
if(data_srcset != undefined && data_srcset.indexOf("webp")!=-1){
    $(hijosFr[hh]).remove();
}else{
$(hijosFr[hh]).append("<a class='guardarComo'  href='"+root+"force-download.php?file="+src+"' download='imagen.jpg' >Guardar como...</a>");    
//$(hijosFr[hh]).append("<input type='radio' name='hid_img[]' id='hidPrevia_"+i+"' value='"+src+"'/>");  
                          }
}
}
}

}else{
  
  alert("no existe frPrevia_"+nIde);
}

   
      var ancho=parseInt($("#previa_"+nIde).css("width"));
        var lft=-512;
       
        var stil=$("#previa_"+nIde).attr("style");
        var stilo="margin-left:"+lft+"px !important; width:1024px; height:600px;   margin-top:20px !important; top:0px; left:50%; "+stil;


        $("#previa_"+nIde).attr("style",stilo);
        n++;


},5000);

},"html"); */

        




if(!document.getElementById("cerrarPrevia_"+nIde)){
$("#previa_"+nIde).append("<a id='cerrarPrevia_"+nIde+"' class='icoCerrar'></a>");
                                                   }


if(!document.getElementById("guardarPrevia_"+nIde)){
$("#frPrevia_"+nIde).append("<a id='guardarPrevia_"+nIde+"' class='btnGuardar' style='opacity:0'>Guardar</a>");
                                                    }


document.getElementById("guardarPrevia_"+nIde).addEventListener("click",enviarImagenAServidor);
  
        
        var prm={
          fc:function(){
            $("#back").fadeOut();
            
            $("#"+nIde).attr("class","miniatura");
            
           // $("#"+idimg).parent().bind("click",clickCuadroMiniatura);
          }
        };

        $("#guardarPrevia_"+nIde).bind("click",function(e){
      e.preventDefault();
        });

          fx.cerrar("cerrarPrevia_"+nIde,"previa_"+nIde,prm);
    };
        
var revisarEscritura=function(e){
   if(e!=undefined && e.keyCode===13){return false;}
    var obj=this;
    var txt=$(obj).val();
    clearTimeout(sto);
    var api_key="563492ad6f9170000100000185fd1a87a53a481ba80ebe870f73d7c6";
    $("#cntDinPb").empty();
    fx.crearCargador("contenedorMedio","Buscando imagenes...","busimg","sm");
    
    /*
    $.ajax({
        method:"GET",
        beforeSend:function(xhr){
xhr.setRequestHeader("Authorization",api_key);
                                },
       url:"https://api.pexels.com/v1/search?query="+txt+"&per_page=15&page=1",
    success:function(data){
     console.log(data);
     data.photos.forEach(photo=>{ 
        image='<div class="marcoMiniatura"><img class="miniatura" src="'+photo.src.original+'"  width="400"  height="300" /></div>'; 
   $("#cntDinPb").append(image);
   $(".trsp").fadeOut(); 
   $("#panelBusqueda").fadeIn();
    });
    },
    error:function(error){
    console.log(error);
    }
});*/


    sto=setTimeout(function(){
    $("#cntDinPb").empty();    
var img, cuadroImg="", iden="", acceso="";
var imgs=new Array();
CTRL_FRASES.txt=txt;
$.get(root+"sistema/publicaciones/buscar_imagen_internet/","txt="+txt,function(r){
$("#panelBusqueda").fadeIn();
/*if (!document.getElementById("tmpPanel")){
$("#panelBusqueda").append("<span id='tmpPanel'></span>");
                                         }*/
$(".trsp").fadeOut();                                

    var src="";
    var n=0;

for(var x=0;x<r.length;x++){

    for(var y=0;y<r[0].length;y++){
        
     img=r[0][y];
     iden="img_"+x+y;

img=img.replace('class="lIMUZd"','class="marcoMiniatura" id="img_'+x+y+'"');
img=img.replace('/url?q=','');
var href=$(img).find("a").attr("href");
var pos=href.indexOf("&sa=");
console.log(href+"--"+pos);
var hrefn=href.substr(0,pos);
hrefn=hrefn.replace("%3Fv%3D","?v=");

$("#cntDinPb").append(img);
$("#"+iden).find(".IkMU6e").find("a").attr("href",hrefn);

    
    acceso=$("#"+iden).find(".IkMU6e").find("a").attr("href");

$("#"+iden).find("img").attr("class","miniatura");
    $("#"+iden).append('<input type="hidden" id="hidd_'+x+y+'" value="'+acceso+'"/>');
    $("#"+iden).append('<p class="pie" id="pie_'+x+y+'"/></p>');
    $("#"+iden).bind("click",clickCuadroMiniatura);  
                                   }
                           }
      /*                
    for(var x=0;x<r.length;x++){
          n++;
             img=r[x]; 
             var elim="/url?q=";
            var ahref=$(img).parent().parent().parent().find("a").attr("href");
            var acceso=ahref.replace(elim,"");

            acceso=acceso.substr(0,acceso.lastIndexOf("&sa="));
          cuadroImg='<div class="marcoMiniatura" id="">
          <input type="hidden" id="hidd_'+n+'" value="'+acceso+'"/> 
          <img src="'+img.src+'" id="img_bus_'+n+'"/>
          <p class="pie" id="pie_'+x+'"/></p>
          </div>';
            $("#cntDinPb").append(cuadroImg);            
                              }*/

    //$("#"+iden).parent().bind("click",clickCuadroMiniatura);

  
  
    fx.desaparecerCargador("busimg");
    
 },"json"); 
    },3000);

}; 



CTRL_FRASES.registrarCategoria=function(obj){
var idctg=$(obj).val();
var id=CTRL_FRASES.id_tema;
                $.get(root+"sistema/publicaciones/agregar_categoria_tema/","act=rgt&id_tema="+id+"&id_ctg="+idctg,function(r){
                    if(r[0].ini[0].res==true){
                        alert("Categoria agregada");
                                             }
                },"json");
};

var registrarCategoria=function(e){
                    var obj=this;
   CTRL_FRASES.registrarCategoria(obj);                 
                                    };

    



    CTRL_FRASES.editarTema=function(obj){
        
var id=(obj.id).substr((obj.id).lastIndexOf("_")+1);
CTRL_FRASES.id_tema=id;


$.get(root+"sistema/publicaciones/agregar_tema/","rgt_id_tema="+id,function(r){
padre.mostrarAccesoEdicionImagen(id);

},"json");
	  var url=root+"sistema/publicaciones/modificar_tema/";
//id_tema="+id
    var prm={
        mtd:"get", 
        dir:url,
        keys:"act=rcp&rcp=frm_frs",
        fc:function(fr){			
			if(fr!=""){
			var mh='<div class="menuHerr" id="menuHerramientas"><a href="'+root+'sistema/publicaciones/agregar_tema" class="agr" id="herrAgr"></a><a href="'+root+'sistema/publicaciones/listar_temas" class="lstOv" id="herrLst"></a>';
			$("#cnt-din").html(fr);
      $("#cdroBus").fadeOut();
			$("#cnt-din").prepend(mh);
      
$("#inptFraseBtn").unbind("click",enviarTemaModoSimple);      
$("#inptFraseBtn").bind("click",enviarTemaModoSimple);

  $("#frmFrase").prepend('<div class="panelBusqueda" id="panelBusqueda"><form name="fr_img_bus" id="frImgBus" method="post" action="#" enctype="application/x-www-form-urlencoded"><div id="cntDinPb"></div><div class="barraInferior"><ul><li></li><li></li><li></li><li><input type="submit" name="enviar_imagenes_elegidas" id="enviarImagenesElegidas" value="Agregar" /></li></ul></div></form></div>');
  $("#frmFrase").prepend('<div class="cuadroBs" id="cuadroBs"><form method="post" action="#" id="sync_frBsCodigo" name="frBsCodigo" enctype="multipart/form-data"><span class="entrada"><label for="textoBusqueda" id="titbus" tabindex="1">Busqueda de imagenes</label><input type="text" id="textoBusqueda" name="textoBusqueda" value="" autocomplete="off"/><a class="icoMostrarPanelImg" id="icoMsPanelImg"></a></span></form></div>');
  $("#sync_frBsCodigo").append($("#barraCargaImg"));
 
if(document.getElementById("textoBusqueda")){
    var cdroBus=document.getElementById("textoBusqueda");
    cdroBus.addEventListener("keyup",revisarEscritura);
    $("#icoMsPanelImg").bind("click",function(e){
      e.preventDefault();
    $("#panelBusqueda").toggle();

    });
}  
			
                
			var pr = {
                        id_nom: "calificacionTema",
                        txt: "calificacion_verbal",
                        valor: "id",
                        ruta:root+"/sistema/configuracion/listar_calificaciones/?act=rcp&rcp=lst_clf",
                        selectorPadreId: ""
                    };

                    fx.rellenarSlct(pr);
                
                 var pr = {
                        id_nom:"categoria",
                        txt: "nombre",
                        valor: "id",
                        //ruta:root+"sistema/inicio/?act=rcp&rcp=expr_img",
                        ruta:root+"sistema/inicio/?act=rcp&rcp=ctg",
                        selectorPadreId: ""
                    };

                
                fx.rellenarSlct(pr);                
               
                
                $("#categoria").bind("change",registrarCategoria);
     
			$.get(root+"sistema/publicaciones/listar_temas/","act=rcp&rcp=lst_frs&id_tema="+id,function(r){
			var frase=r[0].ini[0].frase;
            var subtitulo=r[0].ini[0].subtitulo;
      var descripcion=r[0].ini[0].descripcion;
			var titulo=r[0].ini[0].titulo_comentario;
	        var id_clf=r[0].ini[0].id_clf; 
	        var comentario=r[0].ini[0].comentario; 
	        var contribucion=r[0].ini[0].contribucion;
            var analisis=r[0].ini[0].analisis;
            var nota_relacionada=r[0].ini[0].nota_relacionada; 
            var publicado=r[0].ini[0].publicado;  
            var categoria=r[0].ini[0].categoria;    
			
            var url_img=root+"sistema/publicaciones/listar_imagenes_tema/?act=rcp&rcp=lst_img_frs&id_tema="+id;   
		   
				$("#inptFrase").val(frase);
               $("#subFrase").val(subtitulo);

                vars.inpt="inptFrase";
             crearUrlPaginaHtml();

$("#inptFrase").bind("keypress",crearUrlPaginaHtml);


        if(descripcion!=undefined){
				descripcion=descripcion.substr(0,285);
				$("#inptDescripcion").val(descripcion);}

				$("#titComentario").val(titulo);
                
                var interCalif=setInterval(function(){
                    if(document.getElementById("calificacionTema").options.length>2){
                       
                        $("#calificacionTema").val(id_clf);
                         $("#categoria").val(categoria);
                      
                    clearInterval(interCalif);   
                    }
                },2300);
                
                
				$("#comentarioPositivo").val(comentario);
				
				var valor=$("#comentarioPositivo").val();
                
                if(valor!=undefined){							
				var nuevoValor=valor.substr(0,70);
      	        $("#comentarioPositivo").val(nuevoValor);}

				$("#contribucion").val(contribucion);
                $("#analisisPersonal").val(analisis);
                $("#notaRelacionada").val(nota_relacionada);
                $("#publicarTexto").val(publicado);
				$("#id_act").val(id);
				$("#caso").val("frases");
				$("#nm_id").val("id_tema");
               
                
				
				var p={
				id_act:id,
                act:"mdf",
                frid:"frFrase_async",
				mngfile:0,

				submit_auto:"on",	
                url_rcp_img:url_img,
                herr_rcrt:-1    
				};

				if(document.getElementById("comentarioPositivo")){
					CTRL_FRM.max_longitud=70;
	              $("#comentarioPositivo").bind("keypress",revisarLongitud);
                                                                 }
																 
                if(document.getElementById("inptDescripcion")){
                	CTRL_FRM.max_longitud=285;
	              $("#inptDescripcion").bind("keypress",revisarLongitud);
                                                              }				

if(document.getElementById("agregarImagenABase")){ 


    var agregarImagenABase=document.getElementById("agregarImagenABase");
     agregarImagenABase.removeEventListener("click",activarFile);
    agregarImagenABase.addEventListener("click",activarFile);
}
				
				fx.controlFormularios(p);
				
			},"json");
			
			           }			
		               },
		datatype:"html"			   
                 };
		
		fx.enviarPeticion(prm);
    };
    
    CTRL_FRASES.recuperarListadoFrases=function(){
    //////////////////////////////////////////////////
    /////////////////////////////////////////////////
        var valor=undefined;
        var prm_fr={
      idInput:"textoBusqueda",
      pgnr_url:root+"sistema/publicaciones/listar_temas/?act=rcp&rcp=lst_frs&rgn=10",
      keys:"",
      idLista:"tablaListadoFrases",
      pgnr_cnt:"listadoFrases",
      valor:valor,
      pgnr_rango:10,        
      pgnr_pgnr:1,
      th:"No-Frase-Descripcion-Fecha",
      tit:"Listado De Frases",
      acceso:1,
      static:true,
      oper_edit:1,
      oper_elim:1,
      fc_acce:function(obj){

      },
      fc_edit:function(obj){

CTRL_FRASES.editarTema(obj);
      },
      fc_elim:function(obj){
var id=(obj.id).substr((obj.id).lastIndexOf("_")+1);        
window.location.replace(root+"sistema/administracion/eliminar_servicio/?id_srv="+id);
      }

    };
fx.buscarPorTextoDinamico(prm_fr);
    //////////////////////////////////////////////////
    /////////////////////////////////////////////////    

    var pri={
pgnr_url:root+"sistema/publicaciones/listar_temas/?act=rcp&rcp=lst_frs",
idLista:"tablaListadoFrases",
pgnr_cnt:"listadoFrases",
pgnr_pgnr:1,
 pgnr_rango:10,
      th:"No-Frase-Subt.-Descripción-Fecha-Imagen",
      tit:"Listado de frases",
      acceso:0,
      oper_edit:1,
      oper_elim:1,
      pgnr_valor:undefined,
      fc_acce:function(obj){

      },
      fc_edit:function(obj){
CTRL_FRASES.editarTema(obj);
      },
      fc_elim:function(obj){
var id=(obj.id).substr((obj.id).lastIndexOf("_")+1);        
window.location.replace(root+"sistema/publicaciones/eliminar_frase/?id_tema="+id);
      } 

};

fx.recuperarDatosListaDinamica(pri);      

var eliminarArchivos=function(e){
e.preventDefault();
$.get(root+"sistema/publicaciones/eliminar_imagenes_basura/","act=eli_img_bas",function(r){
if(r[0].ini[0].res==true){
alert("Limpieza concluida");
}
},"json");
                               };

$("#eliminarArchivosBasura").unbind("click",eliminarArchivos);
$("#eliminarArchivosBasura").bind("click",eliminarArchivos);

};	
    
var enviarFormularioFrase=function(e){
console.log("envio");
e.preventDefault();
};

var crearUrlPaginaHtml=function(){
var valor=undefined;
var obj=this;
var valorNuevo=undefined;


setTimeout(function(){ 
 try{
 valor=$(obj).val();

}
 catch(err){
valor=$("#"+vars.inpt).val();
 }

 valorNuevo=valor.replace(/ /g,"_");

$("#urlFrase").val(valorNuevo);

},1000);

};


	this.arrancar=function(){
//

var stipre=undefined;

var recuperarTemasRelacionados=function(){
    $.get(root+"sistema/publicaciones/relacionar_publicaciones/","bus=pubrel",function(r){
var id_tema="";
var id="";
for(var x=0;x<r.length;x++){
  for(var y=0;y<r[x].ini.length;y++){
    id_tema=r[x].ini[y].id_tema;
    id=r[x].ini[y].id;

    if (y==0){
$("#temasPrinRel").val(id);
    }

    $("#optTema_"+id_tema).attr("checked",true);
  }}
        
    },"json");
};

var  revisarTemaElegido=function(){
    var obj=this;
    var id_tema=$(obj).val();

$("#frPublicRel").find("input:checkbox").attr("checked",false);

    $.get(root+"sistema/publicaciones/relacionar_publicaciones/","rgt=rgttma&id_tema="+id_tema,function(r){

setTimeout(function(){
recuperarTemasRelacionados();    
},1000);

    },"json");
};

if(document.getElementById("frPublicRel")){
    
    recuperarTemasRelacionados();
    if(document.getElementById("temasPrinRel")){
        
       var slct= document.getElementById("temasPrinRel");
        slct.addEventListener("change",revisarTemaElegido);
    }
}



if(document.getElementById("iniciar_sesion")){
  $("#fr_sesion_inicio").fadeIn();
  $("#icuadroControlLogin").fadeOut();
                                               }
        var prmp={
        mtd:"get", 
        dir:root+"sistema/usuarios/verificar_sesion_iniciada/",
        keys:"act=vrfseci",
        fc:function(r){
			$("#trsp").fadeOut();

			if(r.res==true){
			$("#icuadroControlLogin").fadeIn();}
			
		               }
                 };
		
		fx.enviarPeticion(prmp);
		
if(document.getElementById("frmFrase")){
var p={};	 
    
setTimeout(function(){
    $("#sync_frBsCodigo").append($("#barraCargaImg"));
$.get(root+"sistema/publicaciones/inicio/","ini=ok",function(r){});
},1000);


var agregarImagenABase=document.getElementById("agregarImagenABase");
     agregarImagenABase.removeEventListener("click",activarFile);
    agregarImagenABase.addEventListener("click",activarFile);

$("#inptFraseBtn").bind("click",enviarFormularioFrase);    
if(document.getElementById("textoBusqueda")){
    var cdroBus=document.getElementById("textoBusqueda");
    cdroBus.addEventListener("keyup",revisarEscritura);
    $("#icoMsPanelImg").bind("click",function(e){
      e.preventDefault();
$("#panelBusqueda").toggle();
    });
}    
    
$("#inptFrase").attr("disabled","disabled");
$("#inptFrase").attr("class","estilo_punteado_grueso ancho-400px desabil");    
$("#inptFraseBtn").bind("click",enviarTemaModoSimple);	
        $("#inptFrase").bind("keypress",crearUrlPaginaHtml);
        
	
    var prm={
	mngfile:0,
    frid:"frFrase_async",
	submit_auto:"on",
    herr_rcrt:-1,
    fc:function(r){  
	
		if(r[0].ini[0].id_act!=undefined){
	var id_act=r[0].ini[0].id_act;
	
	p.id_act=id_act;
	p.caso="frases";
	p.nm_id="id_tema";
	p.frid="frFrase_async";
padre.mostrarAccesoEdicionImagen();
	fx.completarDatosCargaDeImagenes(p);
	                                    }							   
	}

	};

    
setTimeout(function(){

      var pr = {
                        id_nom: "categoria",
                        txt: "nombre",
                        valor: "id",
                        //ruta:root+"sistema/inicio/?act=rcp&rcp=expr_img",
                        ruta:root+"sistema/inicio/?act=rcp&rcp=ctg",
                        selectorPadreId: ""
                    };

                    fx.rellenarSlct(pr);
    
var pr = {
                        id_nom: "calificacionTema",
                        txt: "calificacion_verbal",
                        valor: "id",
                        ruta:root+"/sistema/configuracion/listar_calificaciones/?act=rcp&rcp=lst_clf",
                        selectorPadreId: ""
                    };

                    fx.rellenarSlct(pr);
var SCT=document.getElementById("calificacionTema");
var CTG=document.getElementById("categoria");
    
 var sto=setTimeout(function(){
                   CTG.options[1].setAttribute("selected","selected");
                    SCT.options[1].setAttribute("selected","selected");
 $("#inptFrase").removeAttr("disabled");
$("#inptFrase").attr("class","estilo_punteado_grueso ancho-400px");    
CTRL_FRASES.registrarCategoria(CTG); 
 },7000);
    
},2000);

if(document.getElementById("comentarioPositivo")){
	CTRL_FRM.max_longitud=70;
	$("#comentarioPositivo").bind("keypress",revisarLongitud);
}

if(document.getElementById("inptDescripcion")){
	CTRL_FRM.max_longitud=285;
	$("#inptDescripcion").bind("keypress",revisarLongitud);
}

	fx.controlFormularios(prm);
}
        

var darRespuestaBotonEdicion=function(){
    var obj=this;
    var id=$(obj).attr("id"); 
    var id_tema=id.substr(id.indexOf("_")+1,8);
    var idn=id.substr(id.lastIndexOf("_")+1);
    
    
    /*
 var url_img=root+"sistema/publicaciones/listar_imagenes_tema/?act=rcp&rcp=lst_img_frs&id_tema="+idn; 
	var p={
				id_act:idn,
                act:"mdf",
                frid:"frFrase_async",
				mngfile:"simple",
				submit_auto:"on",	
                url_rcp_img:url_img,
                herr_rcrt:-1    
				};
fx.controlFormularios(p);*/
    
        //CONSULTAR SI EXISTE IMAGEN DE TAMAÑO PERSONALIZADO 
$.get(root+"sistema/publicaciones/recuperar_imagen_personalizada/","rcp=rcp_img_prs&id_tema="+idn,function(r){
var direccionpr=undefined;
var id=undefined;    

    if(r[0].ini[0].res==false){ 
      
        fx.crearCargador("fndTrns","No hay imagen recortada...","noimgrct","sm");
        //AQUÍ SE ENVÍA LA ORDEN PARA QUE SE TOME LA IMAGEN GRANDE Y SE RECORTE A 600X400 Y SE GUARDE EN LA CARPETA -PR-
   var href=root+"sistema/recortar_imagen/";
        $.ajax({
type:"GET",
dataType: 'json',
url:href+"?id_act="+idn+"&comd=bas&act=rct_img_bd&t=ajax&achn=600&altn=400",
cache:false,
success:function(r)
{
    
//var img=r[0].ini[0].img;    
console.log("Imagen recortada ya generada...");
 direccionpr=r[0].ini[0].direccionpr;   
 id=r[0].ini[0].id; 
  CTRL_PUB.idprv="panoram_"+id;   
    $.get(root+"sistema/inicio/","act=rgt_img_imp_auto&id_img="+id,function(r){
        
    },"json");
    stipre=setInterval(function(){
        
    if ($("#"+CTRL_PUB.idprv).clength) {
        clearInterval(stipre);
     fx.desaparecerCargador("noimgrct");        
       
            if(!document.getElementById("img_prv_"+id)){
            $("#"+CTRL_PUB.idprv).append("<img src='"+direccionpr+"' name='imagen_"+id+"' id='img_prv_"+id+"' />");
                                                   }else{
                                                         $("#"+CTRL_PUB.idprv).find("img").attr("src",direccionpr);
                                                    }
                                           
                                             
                              }   
        
    },2000);
      
     fx.darRespuestaBotonPresionado(obj); 
}
});
      
    }
      if(r[0].ini[0].res!=false){
    
        //LA IMAGEN PERSONALIZADA SI EXISTE
       direccionpr=r[0].ini[0].direccionpr; 

        stipre=setInterval(function(){
        
    if ($(".panoram").length>0) { 
        clearInterval(stipre);
       var hijos= $(".panoram").children().length;
        

for(var h=0; h<hijos;h++){

        if($(hijos[h]).prop("tagName")=="IMG"){
         $(hijos[h]).attr("src",direccionpr); 
         break;
                                              }
  else{
if(h+1==hijos){
    if(!document.getElementById("img_prv_1") && $("#panoram_"+id_tema).find("img").length==0){
    $("#panoram_"+id_tema).append("<img name='img_prv' id='img_prv_1'  src='"+direccionpr+"'/>");
                                                                                             }
else{
$("#panoram_"+id_tema).find("img").attr("src",direccionpr);
    }
             break;
             } 
     }
}
                              }   else{
                                  alert("no existe previa...");
                              } 
        
    },3000);
        
        

         fx.darRespuestaBotonPresionado(obj); 
    }
},"json");
    

                
                
        };        
        

this.mostrarAccesoEdicionImagen=function(id){

    if(id==undefined){
        
        setTimeout(function(){    
       
    $.get(root+"sistema/publicaciones/recuperar_ultimo_registro/","act=rcp_ult_rgs&tpo=prs",function(r){
    
        var id_tema=r[0].ini[0].id_tema;
        var id_img=r[0].ini[0].id_img;
        
        if(!document.getElementById("rcrtReg_"+id_img+"_"+id_tema)){
        $("#frmFrase").append("<a class='icoAccessEdtImg' id='rcrtReg_"+id_img+"_"+id_tema+"'></a>");
                                                                   }
        
        $("#rcrtReg_"+id_img+"_"+id_tema).bind("click",darRespuestaBotonEdicion);

    },"json");
         },2000);    
                      }else{

$.get(root+"sistema/publicaciones/recuperar_imagen_impresa_tema/","act=rcp_imp_tma&id_tma="+id,function(r){    
        var id_tema=id;
        var id_img=r[0].ini[0].id_img;
        
        if(!document.getElementById("rcrtReg_"+id_img+"_"+id_tema)){
        $("#frmFrase").append("<a class='icoAccessEdtImg' id='rcrtReg_"+id_img+"_"+id_tema+"'></a>");
                                                                  }
    
    $("#rcrtReg_"+id_img+"_"+id_tema).bind("click",darRespuestaBotonEdicion);
    
},"json");
                      }
}; 

////////////////////////////////////////////////////////////////////////////////////
if(document.getElementById("listadoCalif")){
var pri={
pgnr_url:root+"sistema/configuracion/listar_calificaciones/?act=rcp&rcp=lst_clf",
idLista:"tablaListadoCalif",
pgnr_cnt:"listadoCalif",
pgnr_pgnr:1,
 pgnr_rango:10,
      th:"Num-Calificacion",
      tit:"Listado de calificaciones",
      acceso:0,
      oper_edit:1,
      oper_elim:1,
      pgnr_valor:undefined,
      fc_elim:function(obj){
		var id=obj.id;
		var idn=id.substr(id.lastIndexOf("_")+1);	  
       location.replace(root+"sistema/configuracion/eliminar_calificacion/?id_eli="+idn);
      },
      fc_edit:function(obj){
		  var id=obj.id;
		  var idn=id.substr(id.lastIndexOf("_")+1);
		  
      	$.get(root+"sistema/configuracion/modificar_calificacion/","rcp=frm_clf",function(frm){
        $("#cnt-din").html(frm);
            
		$.get(root+"sistema/configuracion/listar_calificaciones/","act=rcp&rcp=lst_clf&id_act="+idn,function(r){
      	var cn=r[0].ini[0].calificacion_numerica;
		$("#numeroCalif").val(cn);
		var cv=r[0].ini[0].calificacion_verbal;
		$("#verbalCalif").val(cv);
		},"json");
		
		},"html");
                          }
      };

fx.recuperarDatosListaDinamica(pri);    
}

if(document.getElementById("listadoExpresiones")){
var pri={
pgnr_url:root+"sistema/configuracion/listar_expresiones_imagen/?act=rcp&rcp=lst_expr",
idLista:"tablaListadoExpr",
pgnr_cnt:"listadoExpresiones",
pgnr_pgnr:1,
 pgnr_rango:10,
      th:"Expresion-Imagen",
      tit:"Listado de expresiones",
      acceso:0,
      oper_edit:1,
      oper_elim:1,
      pgnr_valor:undefined,
      fc_elim:function(obj){
		var id=obj.id;
		var idn=id.substr(id.lastIndexOf("_")+1);	  
       location.replace(root+"sistema/configuracion/eliminar_expresion/?id_eli="+idn);
      },
      fc_edit:function(obj){
		  var id=obj.id;
		  var idn=id.substr(id.lastIndexOf("_")+1);
		  
      	$.get(root+"sistema/configuracion/modifica_expresion_con_imagen/","act=rcp&rcp=frm_expr",function(frm){
        $("#cnt-din").html(frm);
		$.get(root+"sistema/configuracion/listar_expresiones_imagen/","act=rcp&rcp=lst_expr&id_act="+idn,function(r){
		
		var expresion=r[0].ini[0].expresion;
      	var id=r[0].ini[0].id;
		var url_img=root+"sistema/configuracion/listar_imagenes_expresion/?act=rcp&rcp=lst_img_exp&id_exp="+id; 
			
      	
		$("#expresion").val(expresion);
				$("#id_act").val(id);
				$("#caso").val("expr");
				$("#nm_id").val("id_expr");
		
		
		var p={
frid:"fri_expresiones",
mngfile:"simple",
submit_auto:"on",
id_act:id,
act:"mdf",
url_rcp_img:url_img
	};

	fx.controlFormularios(p);
		
		},"json");
		
		},"html");
      }
      };

fx.recuperarDatosListaDinamica(pri);    
}

if(document.getElementById("frp_expresiones")){
	var p={
frid:"fri_expresiones",
mngfile:"simple",
   fc:function(r){  
	
		if(r[0].ini[0].id_act!=undefined){
	var id_act=r[0].ini[0].id_act;
	
	p.id_act=id_act;
	p.caso="expr";
	p.nm_id="id_expr";
	p.frid="fri_expresiones";

	fx.completarDatosCargaDeImagenes(p);
	                           }
							   
	}
	};
		     
		
	fx.controlFormularios(p);
}

if(document.getElementById("listadoLogos")){
var pri={
pgnr_url:root+"sistema/configuracion/listar_logos/?act=rcp&rcp=lst_logo",
idLista:"tablaListadoLogos",
pgnr_cnt:"listadoLogos",
pgnr_pgnr:1,
 pgnr_rango:10,
      th:"No-Nombre-Imagen",
      tit:"Listado de logo",
      acceso:0,
      oper_edit:1,
      oper_elim:1,
      pgnr_valor:undefined,
      fc_acce:function(obj){

      },
    fc_edit:function(obj){
   
        var id=$(obj).attr("id");
        var ide=id.substr(id.lastIndexOf("_")+1);
        $.get(root+"sistema/configuracion/recuperar_nombre_logo/","act=rcp&id_lgo="+ide,function(r){
            var nombre=r[0].ini[0].nombre;
            $("#nombreLogo").val(nombre);
        },"json");
    },
     fc_elim:function(obj){
    var id=$(obj).attr("id");
    var ide=id.substr(id.lastIndexOf("_")+1);
        $.get(root+"sistema/configuracion/eliminar_logo/","act=eli&id_lgo="+ide,function(r){
         var res=r[0].ini[0].res;
            if(res=="ok"){
                $(obj).parent().parent().remove();
                        }
        },"json");
     }
    
};



        fx.recuperarDatosListaDinamica(pri); }
    
if(document.getElementById("listadoFrases")){ 
var fc=CTRL_FRASES.recuperarListadoFrases;
 fx.funcionExternaInformacionTabla(fc);
CTRL_FRASES.recuperarListadoFrases();
                                            }
		
	};
	
};


