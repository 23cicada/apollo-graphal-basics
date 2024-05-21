import gql from "graphql-tag";

// 标签化模版字面量（tagged template literal）
// gql将GraphQL字符串转换为Apollo所期望的格式
export const typeDefs = gql`
  # Schema definitions go here
  type Query {
    tracksForHome: [Track!]!
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;