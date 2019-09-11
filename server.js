const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
const schema  = require('./db/middlewares')

const server = new ApolloServer({ schema });

const app = new Koa();
server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);