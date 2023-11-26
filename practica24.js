
function Producto(nombre, precio, talla) {
    this.nombre = nombre;
    this.precio = precio;
    this.talla = talla; 
}

let producto1 = new Producto ("Camisa",18.50, "S");
let producto2 = new Producto ("Pantalon", 20, "M");
let producto3 = new Producto ("Blusa", 15 ,  "S");

function mostrarDescripcion(producto) {
    alert (`Nombre: ${producto.nombre}`);
    alert(`Precio: ${producto.precio}`);
    alert(`Categoría: ${producto.talla}`);
  }
//alert(producto1.nombre +  producto1.precio + producto1.talla)
//alert(producto2.nombre + producto2.precio + producto2.talla )

mostrarDescripcion(producto1);
mostrarDescripcion(producto2);
mostrarDescripcion(producto3);