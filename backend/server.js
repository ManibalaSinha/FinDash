const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers/portfolioResolver');
const cors = require('cors');

const typeDefs = gql`
  type Trade {
    id: ID!
    asset: String!
    quantity: Float!
    price: Float!
    currency: String!
    pnl: Float
  }

  type Portfolio {
    id: ID!
    name: String!
    trades: [Trade!]!
  }

  type Query {
    getPortfolios: [Portfolio!]!
    getTrades(portfolioId: ID!): [Trade!]!
  }

  type Subscription {
    tradeUpdated(portfolioId: ID!): Trade
  }
`;

async function startServer() {
    const app = express();
    app.use(cors());

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(` Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer();
