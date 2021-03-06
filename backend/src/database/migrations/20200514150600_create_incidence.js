
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title')
        table.string('description')
        table.string('value')

        table.string('ong_id')
        
        table.foreign('ong_id').references('id').inTable('ongs')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('incidents');
  };
  
  