import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';

const zipChallengeApiLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: from([zipChallengeApiLink]),
});

export default client;
