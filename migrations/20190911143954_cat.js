exports.up = (knex) => {
    return knex.schema.createTable('cat', table => {
        table
            .uuid('cat_id')
            .primary();
        table.string('name',100).notNullable();
        table.string("genre",100).notNullable();
        table.uuid("owner")
        table.foreign("owner").references('owner_id').inTable('owner');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('cat');
}