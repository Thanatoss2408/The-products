
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id_user')
        table.string('username').notNullable().unique()
        table.string('password').notNullable().unique()    
        table.string('name_user').notNullable() 
    } )
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
