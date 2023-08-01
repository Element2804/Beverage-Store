// Also known as the schema file, defines the queries and mutations that clients can execute against the data graph.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Drink {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    drinks: [Drink]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input DrinkInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    drinks(name: String): [Drink]
    drink(_id: ID!): Drink
    user: User
    order(_id: ID!): Order
    checkout(drinks: [DrinkInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateDrink(_id: ID!, quantity: Int!): Drink
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;