export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    user: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    post: Post!
    user: User!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    # Retrieve all records
    getAllUsers: [User!]!
    getAllPosts: [Post!]!
    getAllComments: [Comment!]!

    # Retrieve a specific record by ID
    getUserById(id: ID!): User
    getPostById(id: ID!): Post
    getCommentById(id: ID!): Comment

    # Relationship queries
    getPostsByUser(userId: ID!): [Post!]!
    getUserByPost(postId: ID!): User
    getCommentsByPost(postId: ID!): [Comment!]!
    getPostByComment(commentId: ID!): Post
  }

  type Mutation {
    # Auth mutations (unprotected)
    register(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!

    # User mutations (protected)
    addUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String!): User!
    deleteUser(id: ID!): User!

    # Post mutations (protected)
    addPost(title: String!, userId: ID!): Post!
    updatePost(id: ID!, title: String!): Post!
    deletePost(id: ID!): Post!

    # Comment mutations (protected)
    addComment(text: String!, postId: ID!, userId: ID!): Comment!
    updateComment(id: ID!, text: String!): Comment!
    deleteComment(id: ID!): Comment!
  }
`;