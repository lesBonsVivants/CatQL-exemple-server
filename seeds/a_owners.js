
exports.seed = function(knex, Promise) {
    return knex('owner').del()
        .then(() => {
            return knex('owner').insert({
                owner_id: 'a28d887c-1768-407c-8cc4-3c6f43255cb1',
                first_name: 'John',
                last_name: 'Doe'
            });
        })
        .then(() => {
            return knex('owner').insert({
                owner_id: 'ace71253-5d65-427f-9c7b-efdc1406306a',
                first_name: 'Jane',
                last_name: 'Doe'
            });
        })
        .then(() => {
            return knex('owner').insert({
                owner_id: 'a3900bda-92e1-4695-80db-7e7d1df955cb',
                first_name: 'Paul',
                last_name: 'Dupont'
            });
        });
};