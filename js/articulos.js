const ARRAY_ARTICULOS = [];

class Articulo{

    constructor(codigo, detalle, unidad){
        this.codigo = codigo;
        this.detalle = detalle;
        this.unidad = unidad;
    }

    agregar(){

        let cod = prompt("Nombre Articulo");
        let deta = prompt("Descripcion Articulo");
        let uni = prompt("Cantidad Unidades");

        const NUEVO_ARTICULO = new Articulo(cod, deta, uni);
        ARRAY_ARTICULOS.push(NUEVO_ARTICULO)

        localStorage.setItem(cod, JSON.stringify(ARRAY_ARTICULOS));
    }

}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("articulos"));
}


