const {gql} = require('apollo-server-express')

const typeDefs = gql`

scalar Date

enum Genders {
    male
    female
}

type Author {
    id: ID
    name: String
    age: Int
    gender: Genders
}

input AuthorInput {
    name: String
    age: Int
    gender: Genders
}

type Book {
    id: ID
    name: String
    qty: Int
    created: Date
    authorID: Author
}

type Shelves {
    id: ID
    name: String
    identity: [Identity]
    bookID: [Book]
}

type Identity {
    location: String
    qty: Int
}

type Query {
    getAuthors: [Author]
    getBooks: [Book]
    getShelves: [Shelves]
}

type Mutation {
    createAuthor (input: AuthorInput): Author
    updateAuthor(id: ID!, input: AuthorInput): Author
    deleteAuthor(id: ID!): String
}

`;

module.exports = {typeDefs};