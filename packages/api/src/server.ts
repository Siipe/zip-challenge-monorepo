import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import './connection';
import { ZipCodeResolver } from './zipcode/ZipCodeResolver';

export const createServer = async () => {
  const schema = await buildSchema({
    resolvers: [ZipCodeResolver],
  });

  return new ApolloServer({
    schema,
    formatError: (error) => {
      const {
        extensions: { exception, ...otherExtensions },
      } = error;

      return {
        ...error,
        extensions: otherExtensions,
      };
    },
  });
};

const bootstrap = async () => {
  const server = await createServer();
  server.listen({ port: 5000 }, console.log('\n🚀 Up and running...\n'));
};

bootstrap();
