const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');

const catQueries = require('./queries/catQueries');
const ownerQueries = require('./queries/OwnerQueries');

const schema = makeExecutableSchema({
    typeDefs: readFileSync('db/schemas.graphql', 'utf8'),
    resolvers: {
        // Prototypes des fonctions GET
        Query: {
            cats: (_, filters) => catQueries.getCat(filters),
            owners: (_, filter) => ownerQueries.getOwner(filter),
        },
        // Prototypes des fonctions POST, UPDATE, DELETE
        Mutation: {
            addCat: async (_, cat) => {
                const newCat = await catQueries.addCat(cat);
                return newCat[0];
            },
            updateCat: async (_, cat) => {
                const updatedCat = await catQueries.updateCat(cat);

                return updatedCat[0];
            },
            deleteCat: async (_, catId) => {
                const deletedCat = await catQueries.deleteCat(catId);

                return deletedCat[0];
            },
            addOwner: async (_, owner) => {
                const newCat = await ownerQueries.addOwner(owner);
                return newCat[0];
            },
            updateOwner: async (_, owner) => {
                const updatedCat = await ownerQueries.updateOwner(owner);

                return updatedCat[0];
            },
            deleteOwner: async (_, ownerId) => {
                const deletedCat = await ownerQueries.deleteOwner(ownerId);

                return deletedCat[0];
            },
        },
        // Fonctions de récupération des données d'un owner à partir d'un chat
        Cat: {
            owner: async (cat) => {
                const owner = await ownerQueries.getOwner({ owner_id: cat.owner });
                return owner[0];
            },
        },
        // Fonctions de récupération des données de commentaires à partir d'un film
       /* Movie: {
            comments: async (movie) => {
                const arr = await Promise.all(movie.comments.map(async (comment) => {
                    const coms = await queries.getComments({ comment_id: comment });
                    return coms[0];
                }));
                return arr;
            },
        },*/
    },
});

module.exports = schema;