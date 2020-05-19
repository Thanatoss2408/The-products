const  express = require('express')
const productsController = require('./controllers/productsController')
const routes= express.Router()

routes.get('products/', productsController.index)
routes.get('product/:id',productsController.show)
routes.post('products/',productsController.create)
routes.put('products/:id',productsController.update)
routes.delete('products/:id',productsController.destroy)



module.exports = routes

