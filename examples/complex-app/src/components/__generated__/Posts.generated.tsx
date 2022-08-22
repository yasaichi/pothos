import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoadPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoadPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, content: string }> | null };


export const LoadPostsDocument = gql`
    query loadPosts {
  posts(take: 4) {
    id
    title
    content
  }
}
    `;

/**
 * __useLoadPostsQuery__
 *
 * To run a query within a React component, call `useLoadPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoadPostsQuery(baseOptions?: Apollo.QueryHookOptions<LoadPostsQuery, LoadPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoadPostsQuery, LoadPostsQueryVariables>(LoadPostsDocument, options);
      }
export function useLoadPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadPostsQuery, LoadPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoadPostsQuery, LoadPostsQueryVariables>(LoadPostsDocument, options);
        }
export type LoadPostsQueryHookResult = ReturnType<typeof useLoadPostsQuery>;
export type LoadPostsLazyQueryHookResult = ReturnType<typeof useLoadPostsLazyQuery>;
export type LoadPostsQueryResult = Apollo.QueryResult<LoadPostsQuery, LoadPostsQueryVariables>;