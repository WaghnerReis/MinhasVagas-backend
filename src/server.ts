import {ApolloServer, PubSub} from 'apollo-server'
import mongoose from 'mongoose'

async function startServer({typeDefs, resolvers}){
    mongoose.connect('mongodb+srv://UserName:Password@cluster0.r7kcz.mongodb.net/nKey?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

    const pubSub = new PubSub()
    const server = new ApolloServer({typeDefs, resolvers, context: {pubSub}})

    const {url} = await server.listen()
    console.log(`All right here: ${url}`)
}

export default startServer