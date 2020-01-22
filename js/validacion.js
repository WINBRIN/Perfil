
function redirect (){
    var nombre;
    var pass;
    nombre = document.getElementById("nombre").value;
    pass = document.getElementById("contra").value;
    //se valida que los valores no esten vacios
    if (nombre !=="" && pass!=="") {
        if (nombre == "Guillermo" && pass == "hola") {
            window.location.href="C:/Users/emdashbort323/Documents/perfil/perfilGuillermo/perfilGuille.html";
            limpiarInicio();
        } else if(nombre == "Cesar" && pass == "hola"){
            window.location.href="C:/Users/emdashbort323/Documents/perfil/perfilCesar/perfilCesa.html";
            limpiarInicio();
        }else if(nombre == "Brito" && pass == "hola"){
            window.location.href="C:/Users/emdashbort323/Documents/perfil/perfilBrito/perfilBrit.html";
            limpiarInicio();
        }else{
            alert("Usuario o contraseña son erroneos");
            limpiarInicio();
        }
    } else {
        alert("Los campos estan vacios verifique");
        limpiarInicio();
    }
}
// Se limpian los campos de inicio 
function limpiarInicio(){
    document.getElementById("nombre").value="";
    document.getElementById("contra").value="";
}