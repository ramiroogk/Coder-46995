class Producto{
    constructor(id ,nombre, precio, stock){
        this.nombreProducto= nombre;
        this.precio = precio;
        this.stock=stock;
        this.armandoPaquete= false;
    }
    vender(){
        this.cantidad-= 1;
    }
    armandoPaquete(){
        this.armandoPaquete=true;
    }
}
class Cliente{
    constructor(nombre, edad, direccion){
        this.nombre=nombre;
        this.edad= edad;
        this.direccion=direccion;
    }
}

const productos=[
   {id:1, nombre: "Gorra", precio: 1000, stock: 10  },
   {id:2, nombre: "Remera", precio: 2000, stock: 10  },
   {id:3, nombre: "Buzo", precio: 5000, stock: 10  },
   {id:4, nombre: "Campera", precio: 7000, stock: 0  },
]

// function CrearCliente(){
//     let nombre = prompt(" Ingrese su nombre ");
//     let edad = parseInt(prompt(" Ingrese su edad "));
//     let direccion= prompt("Ingrese su direccion");
//     return {nombre, edad, direccion};
// }
// let datosCliente = CrearCliente();
// let cliente1 = new Cliente(datosCliente.nombre, datosCliente.edad, datosCliente.direccion);

// console.log("nombre ", cliente1.nombre ,cliente1.edad, cliente1.direccion);
    for(let index= 0; index<productos.length; index++){
        console.log(productos[index].nombre);
}
function comprar(nombreProducto,stock){
    if(nombreProducto==true && ){

    }
}

 
