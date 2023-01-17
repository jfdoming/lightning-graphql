/**
 * server.js is the entrypoint to our Node.js application - a backend web server
 * Node.js is a JavaScript runtime allowing JavaScript to be used server-side
 */

/**
 * Express.js is a framework, it provides useful methods for building a web backend (e.g. handling HTTP requests)
 *
 * Apollo is a platform used to build the data graph layer of the application (i.e. what GraphQL is used to query)
 * specifically, we're using Apollo Server since we're building a GraphQL server
 *
 * note: we're able to use ES6 style imports because we're running this application with the esm module.
 *       without esm, we'd need to use require statements, e.g.
 *       const express = require("express");
 */
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./api/graphql";
import cors from "cors";

/* create our Express.js application */
const app = express();
/* create our Apollo Server, a data graph is constructed using the schema we defined in graphql.js */
const server = new ApolloServer({ schema });

/* CORS policy */
const corsPolicy = {
  origin: "http://localhost:3000",
};
app.use(cors(corsPolicy));

/**
 * connect the Apollo Server to the HTTP framework of our Express.js app
 * POST requests to the "/graphql" path will be interpreted as GraphQL queries or mutations
 *
 * in non-prod modes, you can access the GraphQL Playground through your browser at "/graphql" (e.g. http://localhost:5000/graphql)
 * it is a GraphQL IDE, very similar to GraphiQL
 */
server.applyMiddleware({ app, path: "/graphql" });

/* start the server and have it listen on port 5000 */
app.listen({ port: 5000 }, () => {
  console.info("🚀 Server ready at port 5000!");
});
