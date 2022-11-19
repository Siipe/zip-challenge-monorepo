import { gql } from '@apollo/client';

export const getLastSearches = gql`
  query getLastSearches($limit: Float!) {
    getLastSearches(limit: $limit) {
      id
      country
      postCode
      places {
        name
        state
      }
      createdAt
    }
  }
`;
