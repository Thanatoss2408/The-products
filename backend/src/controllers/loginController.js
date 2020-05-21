const connection = require('../database/connections')

module.exports = {

    async access(req, res) {

        const { username, password } = req.body

        const verifyUser = await connection('users')
            .where({ 'username': username, 'password': password })
            .select('id_user', 'username', 'name_user')
            .first()

         return !verifyUser ? res.status(401).json({error: 'Usuario ou senha invalidos'})
         :res.json(verifyUser)
    }
}