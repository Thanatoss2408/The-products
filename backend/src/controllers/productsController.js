const connection = require('../database/connections')


module.exports = {
    async index(req, res) {
        const products = await connection('products').select('*')
        return res.json(products)

    },

    async create(req, res) {

        const { name_product, category, value, description, image } = req.body

        if (!name_product || !category || !value || !description || !image) {
            return res.status(400).send
        }


        await connection('products').insert({
            name_product, 
            category, 
            value,
            description,
            image

        })
        return res.json({success: 'Produto cadastrado com sucesso!'})
    },
    async show(req, res){
        const {id} = req.params

        const product = await connection('products').select('*').where({id_product:id}).first()

       
    
        return product ? res.json(product):res.json({error: 'Produto não encontrado =('})

    },
    
    async update(req,res){
        const {id} =req.params
        const {name_product , category, value, description, image} = req.body
        
        await connection('products')
            .where({id_product: id})
            .update({
                name_product,
                category,
                value,
                description,
                image

            })
            res.json({suceces: 'Produto editado com sucesso!'})


     },

     async destroy(req,res){

        const {id}=req.params
               
        const productDelete = await connection('products').delete().where({id_product:id})

        return productDelete ? res.json({succes:'Item deletado com sucesso!'}): res.json({error:'Item não encontrado =('})
    
    }
}
