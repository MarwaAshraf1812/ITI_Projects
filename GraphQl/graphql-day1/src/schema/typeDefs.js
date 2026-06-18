export const typeDefs = `
  type User {
    id: ID!
    name: String!
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
    # User mutations
    addUser(name: String!): User!
    updateUser(id: ID!, name: String!): User!
    deleteUser(id: ID!): User!

    # Post mutations
    addPost(title: String!, userId: ID!): Post!
    updatePost(id: ID!, title: String!): Post!
    deletePost(id: ID!): Post!

    # Comment mutations
    addComment(text: String!, postId: ID!, userId: ID!): Comment!
    updateComment(id: ID!, text: String!): Comment!
    deleteComment(id: ID!): Comment!
  }
`;