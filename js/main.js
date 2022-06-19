
const botonLimpiar = document.querySelector("#limpiar");
botonLimpiar.addEventListener("mouseover", (evento) =>{
    alertas("Limpia los articulos listados");
});

document.getElementById("btn_funcion").onclick = function(){
    agregar_articulo();
}

document.getElementById("btn_listar").onclick = function(){
    listar_articulos();
}

document.getElementById("limpiar").onclick = function(){
    limpiar_pantalla();
}

document.getElementById("btn_por_articulo").onclick = function(){
    filtrar();
}

cargar_articulosLS();
