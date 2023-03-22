/*const fs = require("fs")*/

import fs from 'fs';

export default class ProductManager {

    static nroid = 1;

    constructor (filename) {
        this.productos = [];
        this.path = './files'
        this.filename = this.path + filename

    }

addProduct = async (id, codigo, titulo, descripcion, precio, imagen, stock) => {
    await fs.promises.mkdir(this.path, {recursive:true})

    for (const elemento of this.productos) {
        if (producto.stock < 0 || producto.precio < 0 || producto.titulo ==='' ||producto.descripcion ==='' || producto.imagen ==='') {
            return console.error('Rellene los campos, por favor.');
        }
        else
        if (elemento.codigo === producto.codigo) {
            return console.error('Ese producto ya existe');
        }
    }
    producto.id = ProductManager.nroid;
    ProductManager.nroid ++;
    this.productos.push({id, codigo, titulo, descripcion, precio, imagen, stock});
    await fs.promises.writeFile(this.filename, JSON.stringify(this.productos))
    console.log('Producto agregado correctamente')
    return this.productos;
    }

getProducts = async () => {
    let result = await fs.promises.readFile(this.filename)
    this.productos = await JSON.parse(result)
    console.log(this.productos)
    return this.productos;
}


getProductsById = async (id) => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    const filteredArr = parsedRes.find(
        (productos) => productos.id == id
    ) 
        return filteredArr ? filteredArr : ''
}

updateProductsById = async(id, updatedData) =>{
    let result = await fs.promises.readFile(this.name)
    let parsedRes = await JSON.parse(result)

    if (await this.getProductsById(id)) {
        const newArr = parsedRes.map((item) => {
            return id == item.prodId ? {...item, ...updatedData} : item
        })
        await fs.promises.writeFile(this.filename, JSON.stringify(newArr))        
        } else {
            console.log(`producto ID ${id} no existe`)
        }
    }

deleteProductsById = async (id) =>{
    let result= await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)
    
    if (await this.getProductsById(id)){
        const newArr = parsedRes.filter((item) => item.prodId !== id)
        await fs.promises.writeFile(this.filename, JSON.stringify(newArr))
        console.log('producto eliminado correctamente')
    } else {
        console.log (`producto ID ${id} no existe`)
        }
    }
}
