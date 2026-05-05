import { useReducer, useCallback, useMemo, useEffect } from 'react';
import axios from 'axios';

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return action.payload;
    case 'LIKE_POST':
      return state.map(post => 
        post.id === action.payload 
          ? { ...post, likes: post.likes + 1 } 
          : post
      );
    case 'DISLIKE_POST':
      return state.map(post => 
        post.id === action.payload 
          ? { ...post, dislikes: post.dislikes + 1} 
          : post
      );
    case 'ADD_POST':
      return [
        { ...action.payload, id: Date.now(), likes: 0, dislikes: 0 },
        ...state
      ];
    default:
      return state;
  }
};

export const useNews = () => {
  const [news, dispatch] = useReducer(newsReducer, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/data/news.json');
        dispatch({ type: 'SET_NEWS', payload: response.data });
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const likePost = useCallback((id) => {
    dispatch({ type: 'LIKE_POST', payload: id });
  }, []);

  const dislikePost = useCallback((id) => {
    dispatch({ type: 'DISLIKE_POST', payload: id });
  }, []);

  const addPost = useCallback((post) => {
    dispatch({ type: 'ADD_POST', payload: post });
  }, []);

  const stats = useMemo(() => {
    return {
      totalPosts: news.length,
      totalLikes: news.reduce((sum, post) => sum + post.likes, 0),
      totalDislikes: news.reduce((sum, post) => sum + post.dislikes, 0),
    };
  }, [news]);

  return {
    news,
    likePost,
    dislikePost,
    addPost,
    stats
  };
};
