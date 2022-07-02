import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      favorites {
        favoriteId
        favoriteTitle
        favoritePhoto
        favoritePrice

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
        favoriteTitle
        favoritePhoto
        favoritePrice
      }
      orders {
        _id
        purchaseDate
        totalCost
      }
    }
  }
`;

export const QUERY_FAVORITES = gql`
  {
    me {
      _id
      favorites {
        favoriteId
        favoriteTitle
        favoritePhoto
        favoritePrice
      }
    }
  }
`;

export const QUERY_ORDERS = gql`
  {
    me {
      _id
      orders {
        _id
        purchaseDate
        totalCost
      }
    }
  }
`;
