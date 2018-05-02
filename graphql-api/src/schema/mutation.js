import Token from './token';
import User from './user';

const Mutation = `
  type Mutation {
    login(email: String!, password: String!): Token
    signup(email: String!, password: String!): Token
  }
`;

export default [Token, Mutation, User];
