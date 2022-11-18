import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  handleSearch: ZipCodeType;
};


export type MutationHandleSearchArgs = {
  input: ZipCodeInputType;
};

export type PlaceType = {
  __typename?: 'PlaceType';
  name: Scalars['String'];
  state: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getLastSearches: Array<ZipCodeType>;
};


export type QueryGetLastSearchesArgs = {
  limit: Scalars['Float'];
};

export type ZipCodeInputType = {
  country: Scalars['String'];
  zipCode: Scalars['String'];
};

export type ZipCodeType = {
  __typename?: 'ZipCodeType';
  country: Scalars['String'];
  id: Scalars['ID'];
  places: Array<PlaceType>;
  postCode: Scalars['String'];
};

export type HandleSearchMutationVariables = Exact<{
  input: ZipCodeInputType;
}>;


export type HandleSearchMutation = { __typename?: 'Mutation', handleSearch: { __typename?: 'ZipCodeType', id: string, country: string, postCode: string, places: Array<{ __typename?: 'PlaceType', name: string, state: string }> } };

export type GetLastSearchesQueryVariables = Exact<{
  limit: Scalars['Float'];
}>;


export type GetLastSearchesQuery = { __typename?: 'Query', getLastSearches: Array<{ __typename?: 'ZipCodeType', id: string, country: string, postCode: string, places: Array<{ __typename?: 'PlaceType', name: string, state: string }> }> };


export const HandleSearchDocument = gql`
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
export type HandleSearchMutationFn = Apollo.MutationFunction<HandleSearchMutation, HandleSearchMutationVariables>;

/**
 * __useHandleSearchMutation__
 *
 * To run a mutation, you first call `useHandleSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHandleSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [handleSearchMutation, { data, loading, error }] = useHandleSearchMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHandleSearchMutation(baseOptions?: Apollo.MutationHookOptions<HandleSearchMutation, HandleSearchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HandleSearchMutation, HandleSearchMutationVariables>(HandleSearchDocument, options);
      }
export type HandleSearchMutationHookResult = ReturnType<typeof useHandleSearchMutation>;
export type HandleSearchMutationResult = Apollo.MutationResult<HandleSearchMutation>;
export type HandleSearchMutationOptions = Apollo.BaseMutationOptions<HandleSearchMutation, HandleSearchMutationVariables>;
export const GetLastSearchesDocument = gql`
    query getLastSearches($limit: Float!) {
  getLastSearches(limit: $limit) {
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

/**
 * __useGetLastSearchesQuery__
 *
 * To run a query within a React component, call `useGetLastSearchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastSearchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastSearchesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLastSearchesQuery(baseOptions: Apollo.QueryHookOptions<GetLastSearchesQuery, GetLastSearchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastSearchesQuery, GetLastSearchesQueryVariables>(GetLastSearchesDocument, options);
      }
export function useGetLastSearchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastSearchesQuery, GetLastSearchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastSearchesQuery, GetLastSearchesQueryVariables>(GetLastSearchesDocument, options);
        }
export type GetLastSearchesQueryHookResult = ReturnType<typeof useGetLastSearchesQuery>;
export type GetLastSearchesLazyQueryHookResult = ReturnType<typeof useGetLastSearchesLazyQuery>;
export type GetLastSearchesQueryResult = Apollo.QueryResult<GetLastSearchesQuery, GetLastSearchesQueryVariables>;