import { users, posts, comments } from '../data/data.js';

export const resolvers = {
  Query: {
    // Retrieve all records
    getAllUsers: () => users,
    getAllPosts: () => posts,
    getAllComments: () => comments,

    // Retrieve a specific record by ID
    getUserById: (_, { id }) => users.find(user => user.id === id),
    getPostById: (_, { id }) => posts.find(post => post.id === id),
    getCommentById: (_, { id }) => comments.find(comment => comment.id === id),

    // Relationship queries
    getPostsByUser: (_, { userId }) => posts.filter(post => post.userId === userId),
    getUserByPost: (_, { postId }) => {
      const post = posts.find(p => p.id === postId);
      return post ? users.find(u => u.id === post.userId) : null;
    },
    getCommentsByPost: (_, { postId }) => comments.filter(c => c.postId === postId),
    getPostByComment: (_, { commentId }) => {
      const comment = comments.find(c => c.id === commentId);
      return comment ? posts.find(p => p.id === comment.postId) : null;
    }
  },

  Mutation: {
    // User mutations
    addUser: (_, { name }) => {
      const nextId = String(users.length ? Math.max(...users.map(u => Number(u.id) || 0)) + 1 : 1);
      const newUser = { id: nextId, name };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, name }) => {
      const user = users.find(u => u.id === id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      user.name = name;
      return user;
    },
    deleteUser: (_, { id }) => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) {
        throw new Error(`User with ID ${id} not found`);
      }
      const [deletedUser] = users.splice(index, 1);
      return deletedUser;
    },

    // Post mutations
    addPost: (_, { title, userId }) => {
      const userExists = users.some(u => u.id === userId);
      if (!userExists) {
        throw new Error(`User with ID ${userId} not found`);
      }
      const nextId = String(posts.length ? Math.max(...posts.map(p => Number(p.id) || 0)) + 1 : 1);
      const newPost = { id: nextId, title, userId };
      posts.push(newPost);
      return newPost;
    },
    updatePost: (_, { id, title }) => {
      const post = posts.find(p => p.id === id);
      if (!post) {
        throw new Error(`Post with ID ${id} not found`);
      }
      post.title = title;
      return post;
    },
    deletePost: (_, { id }) => {
      const index = posts.findIndex(p => p.id === id);
      if (index === -1) {
        throw new Error(`Post with ID ${id} not found`);
      }
      const [deletedPost] = posts.splice(index, 1);
      return deletedPost;
    },

    // Comment mutations
    addComment: (_, { text, postId, userId }) => {
      const postExists = posts.some(p => p.id === postId);
      if (!postExists) {
        throw new Error(`Post with ID ${postId} not found`);
      }
      const userExists = users.some(u => u.id === userId);
      if (!userExists) {
        throw new Error(`User with ID ${userId} not found`);
      }
      const nextId = String(comments.length ? Math.max(...comments.map(c => Number(c.id) || 0)) + 1 : 1);
      const newComment = { id: nextId, text, postId, userId };
      comments.push(newComment);
      return newComment;
    },
    updateComment: (_, { id, text }) => {
      const comment = comments.find(c => c.id === id);
      if (!comment) {
        throw new Error(`Comment with ID ${id} not found`);
      }
      comment.text = text;
      return comment;
    },
    deleteComment: (_, { id }) => {
      const index = comments.findIndex(c => c.id === id);
      if (index === -1) {
        throw new Error(`Comment with ID ${id} not found`);
      }
      const [deletedComment] = comments.splice(index, 1);
      return deletedComment;
    }
  },

  // Field/Relationship Resolvers
  User: {
    posts: (user) => posts.filter(post => post.userId === user.id)
  },

  Post: {
    user: (post) => users.find(user => user.id === post.userId),
    comments: (post) => comments.filter(comment => comment.postId === post.id)
  },

  Comment: {
    post: (comment) => posts.find(post => post.id === comment.postId),
    user: (comment) => users.find(user => user.id === comment.userId)
  }
};
