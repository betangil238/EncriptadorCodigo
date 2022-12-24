// CONEXION DE ELEMENTOS CON EL HTML Y CONFIGURACIONES INICIALES
var input=document.querySelector("#palabra");
input.value="";
input.focus();
var mensaje=document.getElementById("mensajes");
mensaje.value="";
var botonEncriptar=document.querySelector("#encriptar");
var botonDesencriptar=document.querySelector("#desencriptar");
var copiar=document.querySelector("#copiar");
var arrayLetras=[];
var cambioVocal=document.getElementById("vocalesCambio");

//OCULTAR INFO y APARECER
function ocultar(){
    document.getElementById('avisos').style.display="none";
    document.getElementById('muneco').style.display="none";
    document.getElementById('mensajes').style.display="block";
    document.getElementById('copiar').style.display="block";
}

// INGRESANDO LETRAS EN UN ARRAY
function descomponiendoLetras(){
    var palabra=document.getElementById("palabra").value;
    for(var contadorLetras=0;contadorLetras<palabra.length; contadorLetras++){
        var letra=palabra.substr(contadorLetras,1);
        arrayLetras.push(letra);
    }
    return arrayLetras;
}

// COPIAR TEXTO
function copiarTexto(){
    var copiado=document.getElementById("mensajes").value;
    if (copiado.length==0){
        alert("Porfavor encripte o desencripte un texto, antes de Copiar")
    }
   mensaje.select();
   mensaje.setSelectionRange(0,99999);
   document.execCommand('copy');
}

// FUNCIONES PARA ENCRIPTAR CODIGO*********** 
function encriptar(){
    ocultar()
    cambioVocal.innerHTML=""
    mensaje.value="";
    arrayLetras=[];
    descomponiendoLetras();
    for (var contador=0;contador<arrayLetras.length;contador++){   
        if (arrayLetras[contador]=="a"){
           mensaje.value +="ai";
        }  else if  (arrayLetras[contador]=="e"){
           mensaje.value +="enter";
        } else if (arrayLetras[contador]=="i"){
           mensaje.value +="imes";
        } else if (arrayLetras[contador]=="o"){
           mensaje.value +="ober";
        } else if (arrayLetras[contador]=="u"){
           mensaje.value +="ufat";
        } else{
           mensaje.value +=arrayLetras[contador];
        }
    }
    input.value="";
    input.focus();
}

// FUNCIONES PARA DESENCRIPTAR CODIGO PENDIENTE
function desencriptar(){
    ocultar()
    cambioVocal.innerHTML=""
    mensaje.value="";
    arrayLetras=[];
    descomponiendoLetras();
    var cambios=0;
    var contador=0;
    while (contador<arrayLetras.length){   
        if (arrayLetras[contador]=="a" && arrayLetras[contador+1]=="i" ){
           mensaje.value +="a";
           cambios++;
           contador+=2;
        }  else if  (arrayLetras[contador]=="e" && arrayLetras[contador+1]=="n" && arrayLetras[contador+2]=="t" && arrayLetras[contador+3]=="e" && arrayLetras[contador+4]=="r"){
            mensaje.value +="e";
            cambios++;
            contador+=5;
        } else if (arrayLetras[contador]=="i" && arrayLetras[contador+1]=="m" && arrayLetras[contador+2]=="e" && arrayLetras[contador+3]=="s"){
            mensaje.value +="i";
            cambios++;
            contador+=4;
        } else if (arrayLetras[contador]=="o" && arrayLetras[contador+1]=="b" && arrayLetras[contador+2]=="e" && arrayLetras[contador+3]=="r"){
            mensaje.value +="o";
            cambios++;
            contador+=4;
        } else if (arrayLetras[contador]=="u" && arrayLetras[contador+1]=="f" && arrayLetras[contador+2]=="a" && arrayLetras[contador+3]=="t"){
            mensaje.value +="u";
            cambios++;
            contador+=4;
        } else{
            mensaje.value +=arrayLetras[contador];
            contador++
        }
        if (contador==arrayLetras.length && cambios==0){
            mensaje.value+=":  fue el mensaje que intento desencriptar, sin embargo, NO ES UNA PALABRA APTA PARA SER DESENCRIPTADA";
            alert("No fue posible realizar una desencriptacion, porfavor verifique ");
        }
        if (contador==arrayLetras.length && cambios!=0) {
            cambioVocal.innerHTML+="En total se cambiaron: "+ cambios + " vocales encriptadas";
            
        }
    }
    input.value="";
    input.focus();
}

// ACCIONADORES DE BOTONES
botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptar;
copiar.onclick=copiarTexto;



