// JavaScript Document
//\u00e1 -> á 
//\u00e9 -> é 
//\u00ed -> í 
//\u00f3 -> ó 
//\u00fa -> ú 
//\u00c1 -> Á 
//\u00c9 -> É 
//\u00cd -> Í 
//\u00d3 -> Ó 
//\u00da -> Ú 
//\u00f1 -> ñ 
//\u00d1 -> Ñ
function Contacto(){
   
	var crea=new Crear();
	var mensaje="";
	var id="";
	var error=1, error1=1, error2=1, error3=1, error4=1, error5=1,  error6=1;
	var x=0;
	var showErrors = true;
	var fnct=new Funciones(); 
	var root = location.protocol + '//' + location.host;

	if(root=="http://localhost"){ root+="/lavanderiadurazno/public_html"; }
			
	var carga_funct={"fc":[function(){ }]
		     
		     }
    
	
	if(document.getElementById("mapaContacto")){
		document.getElementById("mapaContacto").onclick=function(){
		 mywindow = window.open(root+"/vistas/basica/plantillas/contacto/ubicacion.tpl.php", "Ubicación",
		  "location=1,status=1,scrollbars=1,  width=300,height=400");
    mywindow.moveTo(0, 0);
		                                                           }
	                                              }
	 	
	//Contenido derecho
	if(document.getElementById("contenidoDatos")){
	document.getElementById("contenidoDatos").style.display="block";
	                                              }

if(document.getElementById("enviar")){	

document.getElementById("enviar").onmouseover=function(){ this.className="enviarSel";}
document.getElementById("enviar").onmouseout=function(){ this.className="enviar";}           
     

				
				}

this.verificarEnvio=function(){
         
    /* get some values from elements on the page: */
    var $form = $( this );
        //term = $form.find( 'input[name="s"]' ).val(),
        url = $form.attr( 'action' );
        

    /* Send the data using post and put the results in a div */
   
   	var prm={			serv:root,
						fc:carga_funct.fc,
						json_fc:function(data){
						
		var span1 = $('<h1></h1>').append($('<span>'+data.texto+'</span>'));
		 var span2 = $('<li><b>Nombre:</b></li>').append($('<span>'+data.nombre+'</span>'));
		 var span3 = $('<li><b>Apellido:</b></li>').append($('<span>'+data.apellido+'</span>'));
		 var span4 = $('<li><b>Correo:</b></li>').append($('<span>'+data.correo+'</span>'));
		 var span5 = $('<li><b>Tel&eacute;fono:</b></li>').append($('<span>'+data.telefono+'</span>'));
		 var span6 = $('<li><b>Mensaje:</b></li>').append($('<span>'+data.mensaje+'</span>'));
		 var div1=$('<ul></ul>').append(span1,span2,span3,span4,span5,span6);
		 div1.attr("id","cuadro");
          $( "#result" ).empty().append(div1);  	
		 $( "#cargando_mundo" ).hide();
		  $("#result" ).fadeOut(10000);
		
						},
						esp:"result",
						mod:"async",
						datatype: "json"	
		                }	  
			
	if(document.forms){
		
		 fnct.controlFormularios(prm);
		 fnct._controlarFormas=null;}	
		 

	                            }	
		
	} 