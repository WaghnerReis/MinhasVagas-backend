import {ApolloServer} from 'apollo-server'

async function startServer({typeDefs, resolvers}){
    const server = new ApolloServer({typeDefs, resolvers})

    const {url} = await server.listen()
    console.log(`All right here: ${url}`)
}

export default startServer