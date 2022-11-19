import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import './connection';
import { ZipCodeResolver } from './zipcode/ZipCodeResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ZipCodeResolver],
  });
  const server = new ApolloServer({
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

  server.listen({ port: 5000 }, console.log('\n🚀 Up and running...\n'));
}

bootstrap();
