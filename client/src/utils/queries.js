import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    query getAllUsers {
      getAllUsers{
        _id
        username
        email
        favorites
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;