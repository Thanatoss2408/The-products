const connection = require('../database/connections')

module.exports = {

    async store(req, res) {
        const { username, password, name_user } = req.body

        if (!username || !password || !name_user) {
            res.json({ error: 'Preencha todos os campos!' })
        }

        const verifyUsername = await connection('users')
            .where('username', username)
            .select('username')
            .first()

        if (verifyUsername) {
            return res.json({ error: 'Username já existe' })
        } else {
            await connection('users').insert({
                name_user,
                username,
                password
            })

            return res.json({ success: `Usuário logado com sucesso, seu username: ${username} e sua password: ${password}` })
        }
    }
}