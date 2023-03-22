import fs from 'fs'

export default class CartManager {

    static nroid = 1;

    constructor (filename) {
        this.productos = [];
        this.path = './files'
        this.filename = this.path + filename
    }
}

createCart = async () => {
    
    await fs.promises.mkdir(this.path, {recursive : true})
    
    const cartId = CartManager.globalId++
    const newCart = {
        cartId,
        productos : [],
    }
    this.carts.push(newCart)

    try {
        await fs.promises.writeFile(this.filename, JSON.stringify(this.carts))
        console.log('Cart added to file')
        return newCart
    } catch{
        throw new Error()
    }
}

getCartById = async (id) =>{
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    const filteredArr = parsedRes.find(
        (cart) => cart.cartId == id
    )
    return filteredArr ? filteredArr : ''
}

addProductToCartById = async(cartId, prodId, quantity) =>{
    let cartArr = await fs.promises.readFile(this.filename)
    let parsedArr = JSON.parse(cartArr)

    if (await this.getCartById(cartId)){
        const newCartArr = parsedArr.map((cart) => {
            if (cart.cartId == cartId) {
                const productAlreadyInCart = cart.productos.some(
                    (item) => item.productId === prodId
                )

                if (!productAlreadyInCart) {
                    cart.productos.push({ productId: id, quantity })    
                } else {
                    cart.productos = cart.productos.map((productos) => {
                        if(productos.id == prodId) {
                            return {...productos, quantity: productos.quantity + quantity}
                        } else{
                            return producto
                        }
                    })
                }
            }
            return cart
        })

        await fs.promises.writeFile(this.filename, JSON.stringify(newCartArr))
        return cartId, prodId
    } else {
        console.log('Cart not found')
    }
}





