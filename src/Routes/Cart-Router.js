import { Router } from "express";
import CartManager from "../Service/CartManager";
const pm1 = new ProductManager('/products.json')
const cm1 = new CartManager('/carts.json')

const router = Router()

router.post('/', async (req, res)=> {
    try {
        await cm1.createCart()
        res.send({ status:'Success', msg: 'Cart created successfully'})
    } catch {
        res.send({ status: 'Error', msg: 'Cart could not be created'})
    }
})

router.get('/:cid', async (req, res)=>{
    const cart = await cm1.getCartById(req.params.cid)
    console.log(cart)

    if (cart) {
        res.send({status: 'Success', msg: cart})
    } else {
        res.send({
            status: 'Error',
            msg:`Cart ${req.params.id} could not be found`,
        })
    }
})


router.post('/:cid/products/:pid', async (req, res) => {
    const addProd = await cm1.addProductToCartById(
        req.params.cid,
        req.params.pid,
        req.body.quantity
    )

    if (addProd){
        res.send ({
            status: 'success',
            msg:`${req.body.quantity} units of product ${req.params.pid}, added to cart ${req.params.cid}`,
        })
    } else {
        res.send ({status: 'error', msg: 'Product could not be added'})
    }
})

export default router;