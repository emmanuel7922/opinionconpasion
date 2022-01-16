window.onload=function(){
var ini=new Inicio();



function loadAddThis() {
    addthis.init();
 
}

setTimeout(function(){
ini.arrancar();	
loadAddThis();

},'2000');
};

function Inicio(){
var fgx=new Funciones();
var CTRL_MENU_INI={};
var CTRL_PAG={};

var root = location.protocol + '//' + location.host;	 

if(root.indexOf("localhost")!=-1 || root.indexOf("192.168")!=-1){root+="/tudiquesi/public_html";}


CTRL_MENU_INI.clickBotonNuevaVenta=function(){
	$("#formularioVenta").fadeOut();

		$("#iNVnt").bind("click",function(){
			$("#formularioVenta").fadeIn();
			
           CTRL_MENU_INI.clickBotonesPrincipales();

			if(document.getElementById("fechaEntrega")){ 
			$("#fechaEntrega").datepicker({
				changeMonth: true,
				changeYear: true,
				dateFormat: 'yy-mm-dd'
				 
			  });
		}


////////////////////////////////////
var prms={};
prms.listaSugerenciasId="lstSugerenciasCli";
prms.id_input="cliente";
prms.url=root+"/sistema/administracion/listar_clientes/";
prms.valor=undefined;     

prms.fc=function(id){

  var prm_script={
  archivo:"ctrl_clientes",
  carpeta:"vistas/sistema/js/",
  padre:"cliente_entrada", 
  fc_name:"Clientes",
  prm:fgx
  };

  //SE FIJA EL CLIENTE EN SESIÓN PARA GUARDAR SU INFORMACIÓN Y 
  // SE RESCADA EL NOMBRE Y SE APLICA AL VALOR DEL CAMPO DE TEXTO
  fgx.cargarScript(prm_script,function(obj){
	    var pr={
    idInput:"cliente",
    idHid:"id_cliente"
         };
		 
var vers=2;		 
   obj.rtp.nota.fijarClienteEnSesion(pr,id,vers);
  });
       
          
  setTimeout(function(){ 
    var prm_script={
  archivo:"ctrl_ventas",
  carpeta:"vistas/sistema/js/",
  padre:"seleccion_servicio", 
  fc_name:"Ventas",
  prm:fgx
  };
  
   fgx.cargarScript(prm_script,function(obj){	 
	  var prm={};
	  prm.panelId="formularioVenta";
 obj.rtp.mtd.administrarNotaDeVentaYServicios(prm); 	   
   });

  },400);
		};
 
 fgx.listarSugerencias(prms);
          

////////////////////////////////////

			$("#gpoAccesos").fadeOut();
		});		

};


var listarProximosServicios=function(){
	

fgx.crearCargador("cntPanelInicio","Cargando...","crgPCV");
	
	var prm_script={
  archivo:"ctrl_ventas",
  carpeta:"vistas/sistema/js/",
  padre:"gpoAccesos", 
  fc_name:"Ventas",
  prm:fgx
  };
  
  fgx.cargarScript(prm_script,function(obj){
	 var prm={
	 	idcnt:"cntPanelInicio",
	 	fc:function(){
	 		$("#gpoAccesos").fadeOut();
	 		$("#gpoFormularios").fadeOut();
			 $("#cuadroControles").fadeIn();
			 $("#listadoNotas").fadeIn();
			fgx.desaparecerCargador("crgPCV");
	 	}
	 };
	 
   obj.rtp.mtd.generarPanelListadosVentas(prm);
   $("#cnt-din").fadeOut();	
   
  });
	

};


CTRL_MENU_INI.clickBotonListarVentas=function(){
	
$("#iSPro").unbind("click",listarProximosServicios);	
$("#iSPro").bind("click",listarProximosServicios);


};


this.arrancar=function(){

var CTRL_VAR={};
CTRL_VAR.textoCompleto=[];	
CTRL_VAR.textoReducido=[];



var verTextoReducido=function(e){
e.preventDefault();
      
   var obj=this;
   var id=$(obj).attr("id");
   var pos=id.lastIndexOf("_");
   var iden=id.substr(pos+1,1);

var textoReducido=CTRL_VAR.textoReducido[iden];
$("#accVerMas_"+iden).remove();
$("#accVerMenos_"+iden).remove();

//textoReducido=textoReducido+"... <a href='#' class='accVerMas' id='accVerMas_"+iden+"'> Ver m&aacute;s</a>";
$("#pAnalisis_"+iden).html(textoReducido);
$("#accVerMas_"+iden).bind("click",verTextoCompleto);
var oft=$("#pAnalisis_"+iden).offset();
var top=oft.top-((oft.top)/2);
var topx=top+"px";

$("html, body").animate({ scrollTop:topx  }, 1000);
};
	
var verTextoCompleto=function(e){
		e.preventDefault();
      var obj=this;
      var id=$(obj).attr("id");
      var pos=id.lastIndexOf("_");
      var iden=id.substr(pos+1);
      
      var href=$(obj).attr("href");

var txtCompleto=CTRL_VAR.textoCompleto[iden];
//$("#accVerMas_"+iden).remove();
//var txtCompleto=txtCompleto+" <a href="+root+"/vistas/basica/plantillas/temas/"+url_tema+" class='accVerMenos' id='accVerMenos_"+iden+"'>Ver menos...</a>";

  //    $("#pAnalisis_"+iden).html(txtCompleto);
     // $("#accVerMenos_"+iden).bind("click",verTextoReducido);
//var oft=$("#pAnalisis_"+iden).offset();
//var top=oft.top;
//var topx=top+"px";

$.get(root+"/lanzar_pagina/","rgt=id_ses&id_tma="+iden,function(r){
window.open(href);
},"json");


//$("html, body").animate({ scrollTop: topx }, 1000);


	                               };



var recuperarCategorias=function(){
    	$.get(root+"/sistema/","rcp=ctg",function(r){
    		n=0;
		for(var x=0;x<r.length;x++){
        for(var y=0;y<r[x].ini.length;y++){
n++;
    		var categoria=r[x].ini[y].nombre;
     $("#submenuPr").append("<li><a href='#' id='accCtg_"+n+"'>"+categoria+"</a></li>");
    	
}}
    	},"json");

                                  }


var construirBarraNavegacion=function(){
var numpags=1;
var limites=new Array();

var consultarDatos=function(e){
e.preventDefault();
var obj=this;
var id=$(obj).attr("id");
var pos=id.indexOf("_")+1;
var pos2=id.lastIndexOf("_");
var pos3=pos2-pos;
var l1=id.substr(pos,pos3);
var l2=id.substr(pos2+1);

var prm={};
prm.ini=l1;
prm.fin=l2;
prm.rng=5;

recuperarFrases(prm);

};

$("#barraNavegacionPr1").empty();
$.get(root+"/recuperar_total_temas/","rcp=tot_temas",function(r){
var total=r[0].ini[0].total;
if(total>5){
 numpags=Math.floor(total/5);
var totExac=numpags*5;

if(totExac<total){
numpags+=1;
                 }

var ntramo=0;
var ftramo=4;


for(var lim=0;lim<numpags;lim++){
	limites[lim]=new Array();

	limites[lim][0]=ntramo;
	limites[lim][1]=ftramo;
	ntramo+=5;
	ftramo+=5;
                                           
}

}else{
    limites[0]=new Array();
	limites[0][0]=ntramo;
	limites[0][1]=ftramo;
}


var itramo=0;
var ftramo=0;
var npag=0;
for(var lim=0;lim<numpags;lim++){
itramo=limites[lim][0];	
ftramo=limites[lim][1];
npag=lim+1;

$("#barraNavegacionPr1").append("<li id='btpag_"+itramo+"_"+ftramo+"'>"+npag+"</li>");
//Paginas(itramo,ftramo);
$("#btpag_"+itramo+"_"+ftramo).bind("click",consultarDatos);
                                }


},"json");
};



var loadDynamicContent=function(){
	    // Once that's all done, call addthis.toolbox()
    addthis.toolbox('.addthis_toolbox');
};


CTRL_PAG.agregarEtiquetas=function(gpo1,id_frs){
var nn=0;
			 $.each(gpo1, function(index, et) {
			 var valores=et.split("--"); 
			 id_etiq=valores[0];
			 nombre_etiq=fgx.reemplazarAcentos(valores[1]);
			 
			 $.get(root+"/lanzar_pagina/","rgt=etiq&val="+nombre_etiq+"&ind="+nn,function(r){

			 },"json");
              
              nn++;
			 
			 $("#cuadroEtiquetas_"+id_frs).find("ul").append("<li>"+nombre_etiq+"</li>");
			                               });  
			};

var recuperarFrases=function(prm)	{
var ini=prm.ini;
var rng=prm.rng;

construirBarraNavegacion();

 var textoCompleto=new Array();
	$("#generalCnt").empty();
	
		$.get(root+"/inicio/","opt=ini&rcp=frs_img&ini="+ini+"&rng="+rng,function(r){
		var frase, comp_url_tema, introduccion, gpo2, gpo1, analisis, nota_rel, url_tema, url,id_frs, etiq, titulo_com, calif_num, critica, contribucion=undefined;
		var n=0;
		var nn=0;

		for(var x=0;x<r.length;x++){
        for(var y=0;y<r[x].ini.length;y++){
			
            url_tema=r[x].ini[y].url_tema;
            comp_url_tema=root+"/"+url_tema;
            url=r[x].ini[y].url;
			id_frs=r[x].ini[y].id_frs;
			frase=r[x].ini[y].frase;
			etiq=r[x].ini[y].etiquetas;
			CTRL_PAG.id_tema=id_frs;

			if(etiq!=undefined || etiq!=null){ gpo1=etiq.split("#"); }else{gpo1=undefined;}

			introduccion=r[x].ini[y].descripcion;

			calif_num=r[x].ini[y].calif_numerico;
			critica=r[x].ini[y].critica;		
			contribucion=r[x].ini[y].contribucion;
		    analisis=r[x].ini[y].analisis;
            nota_rel=r[x].ini[y].nota_relacionada;
            

		$("#generalCnt").append("<div class='cuadroIzquierda' id='cdi_"+n+"'></div>");
		$("#cdi_"+n).append("<h1 class='tith'>"+frase+"</h1><div class='cdroImg' id='cdroImg_"+n+"'></div>");
        $("#cdi_"+n).append("<ul class='calificacion puntaje_"+calif_num+"'><li class='star star1' ></li><li class='star star2'></li><li class='star star3'></li><li class='star star4'></li><li class='star star5'></li></ul>");
        $("#cdroImg_"+n).append("<img src='"+root+"/"+url+"' >");
        	
        	$("#cdroImg_"+n).append("<span class='pie'><div class='menuRedes' id='menuRedes_"+n+"'></div></span>");
        	
        	$("#menuRedes_"+n).append("<a href='https://www.facebook.com/sharer.php?u="+comp_url_tema+"' target='_blank' class='btFacebook'></a>");
        	$("#menuRedes_"+n).append("<a  href='https://twitter.com/intent/tweet?text="+frase+"&url="+comp_url_tema+"&hashtags=[hashtag]' target='_blank' class='btTwitter'></a>");
        	$("#menuRedes_"+n).append("<a mailto:?subject=[ASUNTO]&body=Echa un vistazo a esta web [URL] target='_blank' class='btEmail'></a>");
        	$("#menuRedes_"+n).append("<a href='https://www.linkedin.com/sharing/share-offsite/?url="+comp_url_tema+"' target='_blank' class='btLinkedin'></a>");
        	$("#menuRedes_"+n).append("<a href='https://api.whatsapp.com/send?text="+frase+"%20"+comp_url_tema+"' target='_blank' class='btWhatsapp'></a>");
        	$("#menuRedes_"+n).append("<a href='https://api.whatsapp.com/send?text="+frase+"%20"+comp_url_tema+"' target='_blank' class='btTelegram'></a>");
 
        $("#cdi_"+n).append("<h1 class='tits'>"+introduccion+"</h1></div> ");   
         textoCompleto[n]=analisis;

        CTRL_VAR.textoCompleto[n]=textoCompleto[n];
        
        if(analisis.length>300){
        	
        var nuevoTexto=analisis.substr(0,400);
        analisis=nuevoTexto+"... <a href='"+root+"/"+url_tema+"/' class='accVerMas' id='accVerMas_"+CTRL_PAG.id_tema+"'> Ver m&aacute;s</a>";
                               }

         CTRL_VAR.textoReducido[n]=analisis;                      

        $("#cdi_"+n).append("<div class='cdroInfoAdicional comforta'><p class='comentario fuenteAnalisis' id='pAnalisis_"+n+"'>"+analisis+"</p></div>  ");
        $("#cdi_"+n).append("<div class='cdroInfoAdicional comforta'><p class='comentario fuenteContribucion'>"+contribucion+"</p></div>  ");
        $("#accVerMas_"+CTRL_PAG.id_tema).unbind("click",verTextoCompleto);
        $("#accVerMas_"+CTRL_PAG.id_tema).bind("click",verTextoCompleto);
		 //window.__sharethis__.initialize();
		  $("#cdi_"+n).append("<div class='cuadroEtiquetas comforta' id='cuadroEtiquetas_"+id_frs+"'><ul></ul></div>");    
        
         
CTRL_PAG.agregarEtiquetas(gpo1,id_frs);
n++;	

										  }
		                            }
		                         loadDynamicContent(); 
	                           
	},"json");
};

	var isIE = /*@cc_on!@*/false;
	if(document.getElementById("mapaGoogle")){
		if(isIE==true){
			$("#mapaIE").fadeIn();
			$("#mapaGoogle").fadeOut();
			
		}
	}
//TRABAJO PARA PANTALLAS PEQUEÑAS
	if(screen.width<=500){
		console.log("Pantalla pequeña...");

	}
		
		fgx.asignarCarpetaRaiz("lavanderiadurazno");
		fgx.limpiaCampos();
		
		if(document.getElementById("generalCnt")){
			var generalCnt_disp=document.getElementById("generalCnt").style.display;
			
			if($("#generalCnt").css('display')=="none" || $("#generalCnt").css('display')==undefined){
			
				document.getElementById("generalCnt").style.display="block";
				
			                                          } 
			                                     
			if($(".general").css("left")=="300px"  || $("#generalCnt").css('left')==undefined){
			
				document.getElementById("generalCnt").style.left="60px";
			                                          }                                 
			                                         
			
		                                          }
		 
		 //Envío de contacto
		 if(document.getElementById("ctcBasico_async")){
		    var ctc=new Contacto();
		        ctc.verificarEnvio();
	                                                   }                                         
	
 var menuPrin=document.getElementById("botonesPrin");
 var acc=menuPrin.getElementsByTagName("a");
 
 for(var x=0; x<acc.length;x++){
 acc[x].onclick=function(){
 	$("#botonesPrin").find("a").attr("class","bt");
 	$(this).attr("class","btSel");
 	$("#generalCnt").animate({"left":"-460px"});
	 var ruta=root+"/"+this.id;
	
 	$.get(ruta,function(r){
 		document.getElementById("generalCnt").innerHTML=r;
 		$("#generalCnt").fadeIn();
 		$("#generalCnt").animate({
 			left:"60px"
 			}
 		);
 		fgx.limpiaCampos();
 		if(document.getElementById("ctcBasico_async")){
 			
		    var ctc=new Contacto();		   
		        ctc.verificarEnvio();
	                                            }
 	});
 	return false;
                          }	
                               }
 
 if(document.getElementById("btnLogin")){
setTimeout(function(){
	
//$.get(root+"/usuarios/","rcp=sit_login",function(r){
var prm={};
prm.ini=0;
prm.rng=5;
	
		/*$("#pnl_us_din").fadeIn();*/
	$(".cuadroBs").attr("class","cuadrobs busquedaPagIni")
		recuperarCategorias();
		recuperarFrases(prm);	

	               
	
//},"json");
},2000);

	if(document.getElementById("panelUsuarioIni")){
		

		CTRL_MENU_INI.clickBotonesPrincipales=function(){
		//CLICK AVANZADO
		$("#accAvn").bind("click",function(){
		var obj=this;
          $("#panelGestionVenta").fadeOut();
		$("#accesosOpciones").find("li").attr("class","borde-1px-333 ancho300");
        $(obj).parent().parent().attr("class","borde-1px-333 ancho300 sel");        
		$("#gpoAccesos").fadeIn();
		$("#menuAmpliadoIni").fadeIn();
		$("#menuSimpleIni").fadeIn();

		CTRL_MENU_INI.clickBotonNuevaVenta();
		CTRL_MENU_INI.clickBotonListarVentas();
		});
		
		//CLICK RAPIDO
			$("#accRpd").bind("click",function(){
            $("#menuSimpleIni").fadeIn();
            $("#gpoAccesos").fadeIn();
				var obj=this;
		$("#accesosOpciones").find("li").attr("class","borde-1px-333 ancho300");
        $(obj).parent().parent().attr("class","borde-1px-333 ancho300 sel");
				$("#menuAmpliadoIni").fadeOut();
CTRL_MENU_INI.clickBotonNuevaVenta();
			});
			

		};

CTRL_MENU_INI.clickBotonesPrincipales();

CTRL_MENU_INI.clickBotonNuevaVenta();


}




	 var mostrarFormularioLogin=function(){
	 	$.get(root+"/inicio/","",function(doc){
	 		var html=doc;
		 $("#trsp").fadeIn();
		 
		 $("body").append(html);
		 $("#lienzoLogin").fadeIn();
		 $("#lienzoLogin").animate({display:"block",marginTop:"90px"},500);

		 var prmf={
			 fc:function(){
				$("#trsp").fadeOut("slow");
			 }
		 };
		 fgx.cerrar("cerrarFrLogin","lienzoLogin",prmf);
	 	},"html");

		 
	 };

	var btLogin=document.getElementById("btnLogin");
	btLogin.addEventListener("click",mostrarFormularioLogin);
 }
}	

}
