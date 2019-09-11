exports.up = (knex) => {
    return knex.schema.createTable('owner', table => {
        table
            .uuid('owner_id')
            .primary();
        table.string('first_name',100).notNullable();
        table.string("last_name",100).notNullable()
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('owner');
}