import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { createServer } from '../src/server';

let server: ApolloServer;

beforeAll((done) => {
  createServer().then((s) => {
    server = s;
    done();
  });
});

afterAll((done) => {
  Promise.all([server.stop(), mongoose.connection.close()]).then(() => done());
});

it('tries to search for a brazilian city', async () => {
  const result = await server.executeOperation({
    query: `
        mutation ($input: ZipCodeInputType!) {
          handleSearch(input: $input) {
            id
            country
            places {
                name
            }
          }
        }
        `,
    variables: {
      input: {
        country: 'BR',
        zipCode: '36700-000',
      },
    },
  });

  expect(result).toBeTruthy();
  expect(result).toHaveProperty('data');
  expect(result.errors).toBeFalsy();
  expect(result.data?.handleSearch.country).toEqual('Brazil');
  expect(result.data?.handleSearch.places[0].name).toEqual('Leopoldina');
});

it('tries to search for an invalid city', async () => {
  const result = await server.executeOperation({
    query: `
        mutation ($input: ZipCodeInputType!) {
          handleSearch(input: $input) {
            id
            country
            places {
                name
            }
          }
        }
        `,
    variables: {
      input: {
        country: 'invalid',
        zipCode: 'invalid',
      },
    },
  });

  expect(result).toBeTruthy();
  expect(result).toHaveProperty('data');
  expect(result.errors).toBeFalsy();
  expect(result.data?.handleSearch).toBeNull();
});

it('tries to list the last search records', async () => {
  const result = await server.executeOperation({
    query: `
      query ($limit: Float!) {
        getLastSearches(limit: $limit) {
          country
          places {
            name
          }
        }
      }
          `,
    variables: {
      limit: 5,
    },
  });

  expect(result).toBeTruthy();
  expect(result).toHaveProperty('data');
  expect(result.errors).toBeFalsy();
  expect(result.data?.getLastSearches.length).toBeGreaterThan(0);
  expect(result.data?.getLastSearches[0].country).toEqual('Brazil');
  expect(result.data?.getLastSearches[0].places[0].name).toEqual('Leopoldina');
});

it('tries delete every search record', async () => {
  const result = await server.executeOperation({
    query: `
      mutation {
        clearSearchHistory
      }
            `,
    variables: {
      limit: 5,
    },
  });

  expect(result).toBeTruthy();
  expect(result).toHaveProperty('data');
  expect(result.errors).toBeFalsy();
  expect(result.data?.clearSearchHistory).toEqual(true);
});
