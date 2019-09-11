const knex = require('../connection');
const tools = require('../tools');

const table_name = "owner";

function getOwner(filters) {
    return knex(table_name)
        .select('*')
        .where(filters);
}

function addOwner(owner) {

    const tmpOwner = {};

    tmpOwner.owner_id = tools.getUuid();
    tmpOwner.first_name = owner.first_name;
    tmpOwner.last_name = owner.last_name;

    return knex(table_name)
        .insert(tmpOwner)
        .returning('*');

}

function updateOwner(owner) {
    const tmpOwner = {};

    if(owner.name) tmpOwner.first_name = owner.first_name;
    if(owner.genre) tmpOwner.last_name = owner.last_name;

    return knex(table_name)
        .where('owner_id', owner.owner_id)
        .update(tmpOwner)
        .returning('*');
}

function deleteOwner(filter) {

    return knex(table_name)
        .where(filter)
        .del()
        .returning('*');
}

module.exports={
    getOwner,
    addOwner,
    updateOwner,
    deleteOwner
};