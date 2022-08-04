const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Cart {
    _id: ID!
    products:[Product]
    bill: Number
  }

  type Order {
    _id: ID!
    products:[Product]
    bill: Number
    date_added: Date
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders:[Orders]
  }
  
   type Product {
    _id: ID!
    name: String
    imageUrl: String
    description: String
    price: Int
  }

  

  type Query {
    products: [Product]
    product(name: String!): Product   
    cart(id: ID!): [Cart]
    orders(id: ID!): [Order] 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(name: String!, imageUrl: String, description: String!, price:Int): Product
    add
    updateCart(id:ID!): Cart
  }
  
`;

module.exports = typeDefs;
