const ARRAY_ARTICULOS = [];
let id_art = 0;

class Articulo{

    constructor(id, codigo, detalle, unidad){
        this.id = id;
        this.codigo = codigo;
        this.detalle = detalle;
        this.unidad = unidad;
    }

    agregar(){
        let opc = 1;

        while(opc == 1){

            let cod = prompt("Nombre Articulo");
            let deta = prompt("Descripcion Articulo");
            let uni = prompt("Cantidad Unidades");

            const nuevo = new Articulo(id_art, cod, deta, uni);
            ARRAY_ARTICULOS.push(nuevo);
            id_art++;

            opc = prompt("Desea agregar mas archivos \n 1.Si \n 2.No");
        }
        
        let back = prompt("desea voler al menu procipal \n 1.Si \n 2.No");
        if(back == 1){
            inicio();
        }else{
            alert("Gracais");
        }
        
    }

    listar_stock(){
        console.log("Listando articulos.../");
        for(const art of ARRAY_ARTICULOS){
            console.log("id " + art.id + " - Nombre " + art.codigo + "- Detalle " + art.detalle + " - unidades " + art.unidad);
        }
        
        let back = prompt("desea voler al menu procipal \n 1.Si \n 2.No");
        if(back == 1){
            inicio();
        }else{
            alert("Gracais");
        }
    }

    buscar(){
        let buscar = prompt("que codigo desea buscar");

        console.log(ARRAY_ARTICULOS.find(art => art.codigo == buscar));

        let back = prompt("desea voler al menu procipal \n 1.Si \n 2.No");
        if(back == 1){
            inicio();
        }else{
            alert("Gracais");
        }
    }
}

function inicio(){
    clase_art = new Articulo()

    var opc = prompt("Ingrese una opcion: \n 1. Agregar articulo \n 2. Listar articulos \n 3. Buscar Articulo");

    if (opc == 1){
        clase_art.agregar();
    }else if(opc == 2){
        clase_art.listar_stock();
    }else if(opc == 3){
        clase_art.buscar();
    }else{
        alert("Muchas gracias. Adios!");
    }
}

inicio()