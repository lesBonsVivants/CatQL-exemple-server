const knex = require('../connection');
const tools = require('../tools');


function getCat(filters) {
    return knex('cat')
        .select('*')
        .where(filters);
}

function addCat(cat) {

    const tmpCat = {};

    tmpCat.cat_id = tools.getUuid()
    tmpCat.name = cat.name
    tmpCat.genre = cat.genre

    return knex('cat')
        .insert(tmpCat)
        .returning('*');

}

function updateCat(cat) {
    const tmpCat = {};

    if(cat.name) tmpCat.name = cat.name;
    if(cat.genre) tmpCat.genre = cat.genre;

    return knex('cat')
        .where('cat_id', cat.cat_id)
        .update(tmpCat)
        .returning(['cat_id','*']);
}

function deleteCat(filter) {

    return knex('cat')
        .where(filter)
        .del()
        .returning('*');
}

const table_name = "owner";

function getOwner(filters) {
    return knex(table_name)
        .select('*')
        .where(filters);
}

module.exports={
    getCat,
    addCat,
    updateCat,
    deleteCat,
    getOwner
};