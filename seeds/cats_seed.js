
exports.seed = function(knex, Promise) {
    return knex('cat').del()
        .then(() => {
            return knex('cat').insert({
                cat_id: 'f28d887c-1768-407c-8cc4-3c6f43255cb1',
                name: 'Felix',
                genre: 'M',
                owner: "ace71253-5d65-427f-9c7b-efdc1406306a"
            });
        })
        .then(() => {
            return knex('cat').insert({
                cat_id: 'fce71253-5d65-427f-9c7b-efdc1406306a',
                name: 'Minette',
                genre: 'F'
            });
        })
        .then(() => {
            return knex('cat').insert({
                cat_id: 'e3900bda-92e1-4695-80db-7e7d1df955cb',
                name: 'Tigrou',
                genre: 'M'
            });
        });
};