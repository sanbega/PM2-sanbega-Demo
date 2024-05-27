const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let miCarrito;

  beforeEach(() => {
    miCarrito = new CarritoCompra();
  });

  it("debe calcular el valor del producto", () => {
    miCarrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    expect(miCarrito.calcularTotal()).toEqual(20);
  });

  it("debe calcular el valor del descuento", () => {
    miCarrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    expect(miCarrito.aplicarDescuento(10)).toEqual(18);
  });

  it("debe calcular el valor del descuento", () => {
    miCarrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    expect(miCarrito.aplicarDescuento(20)).toEqual(16);
  });

  it("debe calcular el valor del descuento", () => {
    miCarrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    expect(miCarrito.aplicarDescuento(30)).toEqual(14);
  });

  it("debe calcular el valor del descuento", () => {
    miCarrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    expect(miCarrito.aplicarDescuento(40)).toEqual(12);
  });
});
