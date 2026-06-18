import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';

const checkAuth = (context) => {
  if (!context.user) {
    throw new Error('Access denied. You must be logged in to execute this mutation.');
  }
  return context.user;
};

export const resolvers = {
  Query: {
    // Retrieve all records
    getAllUsers: async () => {
      return await User.find({});
    },
    getAllPosts: async () => {
      return await Post.find({});
    },
    getAllComments: async () => {
      return await Comment.find({});
    },

    // Retrieve a specific record by ID
    getUserById: async (_, { id }) => {
      return await User.findById(id);
    },
    getPostById: async (_, { id }) => {
      return await Post.findById(id);
    },
    getCommentById: async (_, { id }) => {
      return await Comment.findById(id);
    },

    // Relationship queries
    getPostsByUser: async (_, { userId }) => {
      return await Post.find({ userId });
    },
    getUserByPost: async (_, { postId }) => {
      const post = await Post.findById(postId);
      if (!post) return null;
      return await User.findById(post.userId);
    },
    getCommentsByPost: async (_, { postId }) => {
      return await Comment.find({ postId });
    },
    getPostByComment: async (_, { commentId }) => {
      const comment = await Comment.findById(commentId);
      if (!comment) return null;
      return await Post.findById(comment.postId);
    }
  },

  Mutation: {
    register: async (_, { name, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('A user with this email already exists.');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword
      });

      const token = jwt.sign(
        { userId: newUser._id, email: newUser.email },
        process.env.JWT_SECRET || 'fallback_secret',
        { expiresIn: '1d' }
      );

      return {
        token,
        user: newUser
      };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid email or password.');
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error('Invalid email or password.');
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'fallback_secret',
        { expiresIn: '1d' }
      );

      return {
        token,
        user
      };
    },

    addUser: async (_, { name, email }, context) => {
      checkAuth(context);
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('A user with this email already exists.');
      }
      
      const hashedPassword = await bcrypt.hash('defaultpass123', 10);
      return await User.create({
        name,
        email,
        password: hashedPassword
      });
    },

    updateUser: async (_, { id, name }, context) => {
      checkAuth(context);
      const updatedUser = await User.findByIdAndUpdate(id, { name }, { new: true });
      if (!updatedUser) {
        throw new Error(`User with ID ${id} not found.`);
      }
      return updatedUser;
    },

    deleteUser: async (_, { id }, context) => {
      checkAuth(context);
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error(`User with ID ${id} not found.`);
      }
      await Post.deleteMany({ userId: id });
      await Comment.deleteMany({ userId: id });
      return deletedUser;
    },

    addPost: async (_, { title, userId }, context) => {
      checkAuth(context);
      const userExists = await User.findById(userId);
      if (!userExists) {
        throw new Error(`User with ID ${userId} not found.`);
      }
      return await Post.create({ title, userId });
    },

    updatePost: async (_, { id, title }, context) => {
      checkAuth(context);
      const updatedPost = await Post.findByIdAndUpdate(id, { title }, { new: true });
      if (!updatedPost) {
        throw new Error(`Post with ID ${id} not found.`);
      }
      return updatedPost;
    },

    deletePost: async (_, { id }, context) => {
      checkAuth(context);
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) {
        throw new Error(`Post with ID ${id} not found.`);
      }
      await Comment.deleteMany({ postId: id });
      return deletedPost;
    },

    addComment: async (_, { text, postId, userId }, context) => {
      checkAuth(context);
      const postExists = await Post.findById(postId);
      if (!postExists) {
        throw new Error(`Post with ID ${postId} not found.`);
      }
      const userExists = await User.findById(userId);
      if (!userExists) {
        throw new Error(`User with ID ${userId} not found.`);
      }
      return await Comment.create({ text, postId, userId });
    },

    updateComment: async (_, { id, text }, context) => {
      checkAuth(context);
      const updatedComment = await Comment.findByIdAndUpdate(id, { text }, { new: true });
      if (!updatedComment) {
        throw new Error(`Comment with ID ${id} not found.`);
      }
      return updatedComment;
    },

    deleteComment: async (_, { id }, context) => {
      checkAuth(context);
      const deletedComment = await Comment.findByIdAndDelete(id);
      if (!deletedComment) {
        throw new Error(`Comment with ID ${id} not found.`);
      }
      return deletedComment;
    }
  },

  // Field Resolvers
  User: {
    id: (user) => user._id.toString(),
    posts: async (user) => {
      return await Post.find({ userId: user._id });
    }
  },

  Post: {
    id: (post) => post._id.toString(),
    user: async (post) => {
      return await User.findById(post.userId);
    },
    comments: async (post) => {
      return await Comment.find({ postId: post._id });
    }
  },

  Comment: {
    id: (comment) => comment._id.toString(),
    post: async (comment) => {
      return await Post.findById(comment.postId);
    },
    user: async (comment) => {
      return await User.findById(comment.userId);
    }
  }
};
