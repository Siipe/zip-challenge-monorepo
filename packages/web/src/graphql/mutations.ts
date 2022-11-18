import { gql } from "@apollo/client";

export const handleSearch = gql`
  mutation handleSearch($input: ZipCodeInputType!) {
    handleSearch(input: $input) {
      id
      country
      postCode
      places {
        name
        state
      }
    }
  }
`;
