class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }
  calcularTotal() {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.precio;
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = total * (porcentaje / 100);
    return total - descuento;
  }
}

const miCarrito = new CarritoCompra();

miCarrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
miCarrito.agregarProducto({ nombre: "Producto 2", precio: 30 });
console.log(miCarrito, "esto es tu producto");

console.log("Total antes de descuento:", miCarrito.calcularTotal());

console.log("Total con descuento:", miCarrito.aplicarDescuento(10));

module.exports = CarritoCompra;
