const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/route");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/TypeDefs");
const { resolvers } = require("./graphql/Resolvers");
const http = require ('http')

async function startApolloServer(typeDefs, resolvers) {
    const app = express();

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();

    server.applyMiddleware({ app });

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)















// const exspress = require('express')
// const bodyParser = require('body-parser')
// const routes = require('./routes/route')
// const app = exspress()
// const port = 3000

// app.use(bodyParser.json())

// app.use(routes)

// app.listen(port, () => {
//     console.log(`Server is Running Now in http://localhost:${port}`)
// })