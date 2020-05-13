const  express = require('express')
const productsController = require('./controllers/productsController')
const routes= express.Router()

routes.get('/', productsController.index)
routes.post('/',productsController.create)
routes.get('/:id',productsController.show)
routes.put('/:id',productsController.update)
routes.delete('/:id',productsController.destroy)



module.exports = routes

