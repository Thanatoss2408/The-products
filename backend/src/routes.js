const  routes = require('express').Router()

const productsController = require('./controllers/productsController')
const loginController = require('./controllers/loginController')
const usersController = require('./controllers/usersController')



routes.get('/products', productsController.index)
routes.get('/product/:id',productsController.show)
routes.post('/products',productsController.create)
routes.put('/product/:id',productsController.update)
routes.delete('/product/:id',productsController.destroy)

routes.post('/login',loginController.access)

routes.post('/users',usersController.store)


module.exports = routes

