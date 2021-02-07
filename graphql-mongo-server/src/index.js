import {ApolloServer} from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import {resolvers} from "./resolvers";
import {typeDefs} from "./typeDefs";

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({app});

    await mongoose.connect("mongodb://localhost:27017/test", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    app.listen({port: 4000}, () =>
        console.log(`Во имя Отца и Сына, и Святого духа это работает http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();
