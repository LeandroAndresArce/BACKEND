import express from 'express';
import Productsrouter from '../src/Routes/Products-Router'
import cartRouter from '../src/Routes/Cart-Router'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/products', Productsrouter)
app.use('/api/carts', cartRouter)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)

})
