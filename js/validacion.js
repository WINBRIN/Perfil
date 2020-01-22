
function redirect (){
    var nombre;
    var pass;
    nombre = document.getElementById("nombre").value;
    pass = document.getElementById("contra").value;
    //se valida que los valores no esten vacios
    if (nombre !=="" && pass!=="") {
        if (nombre == "Guillermo" && pass == "hola") {
            location.href="../perfilGuillermo/perfilGuille.html";
        } else if(nombre == "Cesar" && pass == "hola"){
            location.href="../perfilCesar/perfilCesa.html";
        }else if(nombre == "Brito" && pass == "hola"){
            location.href="../perfilBrito/perfilBrit.html";
        }else{
            alert("Usuario o contraseña son erroneos");
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