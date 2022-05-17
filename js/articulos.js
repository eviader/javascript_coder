const ARRAY_ARTICULOS = [];

class Articulo{

    constructor(codigo, detalle, unidad){
        this.codigo =  codigo;
        this.detalle = detalle;
        this.unidad =  unidad;
    }
}

function agregar_articulo(){

    let codigo = document.getElementById("cod_carga");
    let descripcion = document.getElementById("desc_carga");
    let unidades = document.getElementById("num_carga");
    
    let cod = codigo.value;
    let desc = descripcion.value;
    let num = unidades.value;

    const NUEVO_ARTICULO = new Articulo(cod, desc, num);
    ARRAY_ARTICULOS.push(NUEVO_ARTICULO)
    localStorage.setItem(cod, JSON.stringify(ARRAY_ARTICULOS));

}

function cargar_articulosLS() {
    return JSON.parse(localStorage.getItem("TH1222"));
}

function listar_articulos(){
    let codigo = document.getElementById("codigo");
    let descripcion = document.getElementById("descripcion");
    let stock = document.getElementById("stock");

    let articulos = cargar_articulosLS();
    
    for (const art of articulos){
        
        let contenido_cod = document.createElement('h6');
        let contenido_desc = document.createElement('h6');
        let contenido_stock = document.createElement('h6');
        
        contenido_cod.textContent = art.codigo;
        contenido_desc.textContent = art.detalle;
        contenido_stock.textContent = art.unidad;

        codigo.appendChild(contenido_cod);
        descripcion.appendChild(contenido_desc);
        stock.appendChild(contenido_stock);

    }
}

function limpiar_pantalla(){

    const codigo = document.getElementById("codigo");
    let h_codigo = document.querySelector("h6");
    codigo.removeChild(h_codigo);

    const descripcion = document.querySelector("desc");
    let h_descripcion = document.querySelector("h6");
    descripcion.removeChild(h_descripcion);

    const stock = document.getElementById("stock");
    let h_stock = document.querySelector("h6");
    stock.removeChild(h_stock);
 
        
    // while(true){
    //     try {
    //       

            

    //     } catch {
    //         console.log("nada que borar")
    //         break;
    //     }
        
    // }
    
}