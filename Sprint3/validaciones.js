const string =document.querySelector("#in_nombre_usuario");
const stringA =document.querySelector("#in_contrasena");
const stringB =document.querySelector("#in_confirmar_contrasena");
const boton_registro =document.querySelector("#btn_registrar_usuario");
//const espacioMensaje=document.querySelector(".mensaje_error")

let registros =[];

boton_registro.addEventListener("click", agregarRegistro);

class MiConstructor{
    constructor(usuario1,contrasena1,confirmacion1){
        this.usuario=usuario1;
        this.contrasena=contrasena1;
        this.confirmacion=confirmacion1;
    }
}

function agregarRegistro(){
    const usuario=string.value;
    const contrasena=stringA.value;
    const confirmacion=stringB.value;

    let usuarioCreado=new MiConstructor(usuario,contrasena,confirmacion);

    if(validar_nombre_usuario(usuarioCreado.usuario)){
        if(validar_contrasena(usuarioCreado.contrasena)){
                if(confirmar_contrasena(usuarioCreado.contrasena,usuarioCreado.confirmacion)){
                    //console.log("Se registro el usuario");
                    registros.push(usuarioCreado);
                    OrdenarArreglo(registros);
                    console.log(registros);
                }else{//console.log("La confirmacion no coincide con la contraseña");
                }
        }else{//console.log("La contraseña no es apta");
        }
    }else{//console.log("El usuario no es apto");
    }

    string.value="";
    stringA.value="";
    stringB.value="";


    function validar_nombre_usuario(string){
        // La ñ arroja falso no esta incluida
        patron2 = /^[a-zA-Z]{6,30}$/g;
        if(patron2.test(string)){
            return true;
        }else{
            return false;
        }
    }

    function validar_contrasena (string){
        // 6, minmo 6 sin maximo
        patron1 = /^[A-Z0-9]{6,}$/g;
        if(patron1.test(string)){
            return true;
        }else{
                return false;
        }
    }

    function confirmar_contrasena(string1,string2){
        if(string1===string2){
            return true;
        }else{
            return false;
        }
    }
}

function OrdenarArreglo(arreglo){
    arreglo.sort((a,b) =>{
        if(a.usuario<b.usuario){
            return -1;
        }else if(a.usuario>b.usuario){
            return 1;
        }else{
            return 0;
        }
    });
}

/*
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;

module.exports.registros = registros;
module.exports.OrdenarArreglo=OrdenarArreglo;
module.exports.agregarRegistro=agregarRegistro;
*/