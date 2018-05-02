import { makeExecutableSchema } from 'graphql-tools';
import Query from './query';
import Mutation from './mutation';
import { resolvers } from '../resolvers';

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const typeDefs = [SchemaDefinition, Query, ...Mutation];

export const schema = makeExecutableSchema({ typeDefs, resolvers });
