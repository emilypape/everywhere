const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Favorite {
        favoriteId: String
        title: String
        cost: String
    }

    type User {
        _id: ID
        username: String
        email: String
        favorites: [Favorite]
    }

    input bValues {
        favoriteId: String
        title: String
        cost: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getSingleUser(username: String!): User
        getAllUsers: [User]
    }

    type Mutation {
        createUser(email: String!, username: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addFavorite(input: bValues): User
        deleteFavorite(favoriteId: String!): User
    }
`;

module.exports = typeDefs;