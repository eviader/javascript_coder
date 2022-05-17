document.getElementById("btn_funcion").onclick = function(){
    agregar_articulo();
}

document.getElementById("btn_listar").onclick = function(){
    listar_articulos();
}

document.getElementById("limpiar_pantalla").onclick = function(){
    limpiar_pantalla();
}

cargar_articulosLS();
