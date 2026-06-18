import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import jwt from 'jsonwebtoken';
import { connectDB } from './config/db.js';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './resolvers/resolvers.js';

// Connect to MongoDB Database
await connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT) || 4000 },
  context: async ({ req }) => {
    // Get authorization header
    const authHeader = req.headers.authorization || '';
    
    // If a token is provided in the format 'Bearer <token>'
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        return { user: decoded };
      } catch (error) {
        console.warn('Invalid / expired token provided:', error.message);
      }
    }
    
    return { user: null };
  }
});

console.log(`🚀 Server ready at: ${url}`);
