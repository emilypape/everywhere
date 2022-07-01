import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      favorites {
        favoriteId
      }
      orders {
        _id
        purchaseDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      favorites {
        favoriteId
      }
      orders {
        _id
        purchaseDate
        totalCost
      }
    }
  }
`;
