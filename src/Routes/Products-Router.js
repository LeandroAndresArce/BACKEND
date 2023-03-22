import { Router } from "express";
import ProductManager from '..Service/ProductManager'

const pm1 = new ProductManager('/products.json')

const router = Router()

router.get('/', async (req, res) => {
    const products = await pm1.getProducts()
    if(req.query.limit) {
        res.send(products.slice(0, req.query.limit))
    } else {
        res.send(products)
    }
})

router.get('/:pid', async (req, res) => {
    const product = await pm1.getProductById(req.params.pid)
    if (product){
        res.send(product)
    } else {
        res.send({ msg:`Product ID ${req.params.pid} not found`})
    }
})

router.post('/', async (req, res) => {
    const newProd = await pm1.addProduct(req.body)

    if(newProd) {
        res.send({
            status: 'success',
            msg:`Product ${newProd.id} created successfully`
        })
    } else {
        res.send({
            status:'error',
            msg: `product couldn't be created`,
        })
    }
})

router.put('/:pid', async (req, res) =>{
    console.log(req.params)
    const updatedProd = await pm1.updateProductById(req.params.pid, req.body)
    
    if (updatedProd){
        res.send({
            status:'success',
            msg:`Product ${req.params.pid} update successfully`,
        })
    } else {
        res.send({
            status:'error',
            msg:`Product ${req.params.pid} doesn't exist`,
        })
    }
})

router.delete('/:pid', async (req, res) => {
    pm1.deleteProductById(req.params.pid)
    res.send('Ok')
})

export default router