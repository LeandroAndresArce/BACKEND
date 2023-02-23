class ProductManager {

    static nroid = 1;

    constructor (id, codigo, titulo, descripcion, precio, imagen, stock) {
        this.productos = [];
        this.codigo =codigo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen,
        this.stock = stock;
        this.id=id;
    }

addProduct(producto){
    for (const elemento of this.productos) {
        if (producto.stock < 0 || producto.precio < 0 || producto.titulo ==='' ||producto.descripcion ==='' || producto.imagen ==='') {
            return console.error('Rellene los campos, por favor.');
        }
        else
        if (elemento.codigo = producto.codigo) {
            return console.error('Ese producto ya existe');
        }
    }
    producto.id = ProductManager.nroid;
    ProductManager.nroid ++;
    return this.productos;
    }

getProducts(producto){
    return this.productos;
}


getProductsById (id) {
    for (const elemento of this.productos) {
        if(elemento.id === id) {
            return elemento.titulo;
        }
    }
    return console.error('Ese artículo no se encuentra');
}

}


