const ARRAY_ARTICULOS = [];

class Articulo{

    constructor(codigo, detalle, unidad){
        this.codigo =  codigo;
        this.detalle = detalle;
        this.unidad =  Number(unidad);
    }
}

function limpiar_pantalla(){

    document.getElementById("codigo").innerHTML = "";
    document.getElementById("descripcion").innerHTML = "";
    document.getElementById("stock").innerHTML = "";
}

function agregar_articulo(){
    let codigo = document.getElementById("cod_carga").value;
    let descripcion = document.getElementById("desc_carga").value;
    let unidades = document.getElementById("num_carga").value;

    codigo === "" && alertas("Ingrese un codigo");
    descripcion === "" && alertas("Ingrese una descripcion");
    unidades <= 0 && alertas("Se carga el producto con valor de unidades 0");


    if (codigo && descripcion !== ""){
        const NUEVO_ARTICULO = new Articulo(codigo, descripcion, unidades);
        ARRAY_ARTICULOS.push(NUEVO_ARTICULO)
        localStorage.setItem("articulos", JSON.stringify(ARRAY_ARTICULOS));  
    }
}

function cargar_articulosLS() {
    return JSON.parse(localStorage.getItem("articulos"));
}

function listar_articulos(){
    let codigo = document.getElementById("codigo");
    let descripcion = document.getElementById("descripcion");
    let stock = document.getElementById("stock");

    let articulos = cargar_articulosLS();
    limpiar_pantalla()


    //Aca controlamos que el contenido de storage no sea null
    articulos === null && alertas("No hay productos cargados");
    
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

function filtrar(){
    let busqueda_art = document.getElementById("input_busqueda").value;
    let codigo = document.getElementById("codigo");
    let descripcion = document.getElementById("descripcion");
    let stock = document.getElementById("stock");

    let articulos = cargar_articulosLS();
    limpiar_pantalla()

    for (const art of articulos){

        if( art.codigo == busqueda_art){
        
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
}

function alertas(mensaje){
    Toastify(
        {text: mensaje, 
        gravity: "bottom", style: {
        background: "#a4b798",
        }, duration: 3000}).showToast();
}


