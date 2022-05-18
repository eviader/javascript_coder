

let nombre = document.getElementById("nombre");
nombre.addEventListener("keyup", validar_nombre);

function validar_nombre() {
    if (nombre.value.length < 3) {
        var contenido = "<p class='text-white bg-danger p-3'>Nombre Invalido</p>";
        document.getElementById("alerta").innerHTML = contenido;
    } else {
        document.getElementById("alerta").innerHTML = "";
    } 
}

let email = document.getElementById("email");
email.addEventListener("keyup", validar_mail);

function validar_mail() {
    if (email.value.length < 10) {
        var contenido = "<p class='text-white bg-black p-3'>Mail invalido</p>";
        document.getElementById("alerta").innerHTML = contenido;
    } else {
        document.getElementById("alerta").innerHTML = "";
    } 
}

let telefono = document.getElementById("telefono");
telefono.addEventListener("mouseenter", validar_telefono);

function validar_telefono() {
    if (telefono.value == "") {
        var contenido = "<p class='text-white bg-black p-3'>Ingrese numero de telefono, Ej: 011 58966421</p>";
        document.getElementById("alerta").innerHTML = contenido;
    } else {
        document.getElementById("alerta").innerHTML = "";
    } 
}