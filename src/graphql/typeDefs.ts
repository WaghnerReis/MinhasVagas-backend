import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from 'path'

const types = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypes(types)

export default (typeDefs)