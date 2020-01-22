var nombre, pass;
nombre = document.getElementById("campo").value;
pass = document.getElementById("").value;


switch (nombre !="" && pass!="") {
    case 'Guillermo':
        if (pass == "hola") {
            //Mandar a la pagina de inicio
        } else {
            alert("Contraseña incorrecta para este usuario");
        }
        break;
    case 'Brito':
        if (pass == "hola") {
            //Mandar a la pagina de inicio
        } else {
            alert("Contraseña incorrecta para este usuario");
        }
        break;
    case 'Cesar':
        if (pass == "hola") {
            //Mandar a la pagina de inicio
        } else {
            alert("Contraseña incorrecta para este usuario");
        }
        break;
    default:
        alert("Los campos estan vacios verifique");
        break;
}