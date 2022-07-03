import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
mutation addFavorite($favoriteId: String!, $favoriteTitle: String!, $favoritePhoto: String!, $favoritePrice: String!) {
  addFavorite(favoriteId: $favoriteId, favoriteTitle: $favoriteTitle, favoritePhoto: $favoritePhoto, favoritePrice: $favoritePrice) {
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
