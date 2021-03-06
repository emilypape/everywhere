const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Favorite {
        favoriteId: String
        favoriteTitle: String
        favoritePhoto: String
        favoritePrice: String
    }

    type Checkout {
        session: ID
    }

    type Order {
        _id: ID
        purchaseDate: String
        title: String
        totalCost: String
    }

    type User {
        _id: ID
        username: String
        email: String
        favorites: [Favorite]
        orders: [Order]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getSingleUser(username: String!): User
        getAllUsers: [User]
        user: User
        order(_id: ID!): Order
        checkout(title: String!, price: String!): Checkout
    }

    type Mutation {
        createUser(email: String!, username: String!, password: String!): Auth
        addOrder(title: String!, price: String!): Order
        login(email: String!, password: String!): Auth
        addFavorite(favoriteId: String!, favoriteTitle: String, favoritePhoto: String, favoritePrice: String): User
        deleteFavorite(favoriteId: String!): User
    }
`;

module.exports = typeDefs;