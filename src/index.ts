import connectLivereload from 'connect-livereload'
import express from 'express'
import {Cart} from './main/Cart'
import {Item} from './main/Item'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('hello'))

app.get('/items', (req, res) => {

    const items = [{name: 'apples'}]

    res.json({ items })
})

app.put('/cart', (req, res) => {
    console.log(req.body) //there is no body :(
    const cartId = req.body.id
    const cart = new Cart()

    console.log('HERER 222222')
    const keys = Object.keys(req.body)
    const apple = new Item('Apple', 50, Number(keys[2]))

    cart.addItem(apple)
    console.log('HERER 33333x')


    //const itemOrder = { name : keys[1], quantity: keys[2]}



    res.json({ cart })
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

app.use(connectLivereload())

export default app
