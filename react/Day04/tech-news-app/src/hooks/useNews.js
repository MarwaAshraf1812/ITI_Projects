import { useReducer, useCallback, useMemo, useEffect } from 'react';
import axios from 'axios';

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return { ...state, newsList: action.payload };

    case 'LIKE_POST':
      return {
        ...state,
        newsList: state.newsList.map(post =>
          post.id === action.payload
            ? { ...post, likes: post.likes + 1 }
            : post
        ),
      };

    case 'DISLIKE_POST':
      return {
        ...state,
        newsList: state.newsList.map(post =>
          post.id === action.payload
            ? { ...post, dislikes: post.dislikes + 1 }
            : post
        ),
      };

    case 'ADD_POST':
      return {
        ...state,
        newsList: [
          ...state.newsList,
          {
            ...action.payload,
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            tags: action.payload.tags.split(',').map(t => t.trim()),
            likes: 0,
            dislikes: 0,
            comments: 0,
          },
        ],
      };

    case 'TOGGLE_FORM':
      return { ...state, isFormOpen: !state.isFormOpen };

    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};

const initialState = {
  newsList: [],
  isFormOpen: false,
  searchQuery: '',
};

export const useNews = () => {
  const [state, dispatch] = useReducer(newsReducer, initialState);
  const { newsList, isFormOpen, searchQuery } = state;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('/data/news.json');
        dispatch({ type: 'SET_NEWS', payload: res.data });
      } catch (error) {
        console.error('Error fetching news:', error);
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

  const toggleForm = useCallback(() => {
    dispatch({ type: 'TOGGLE_FORM' });
  }, []);

  const handleSearch = useCallback((query) => {
    dispatch({ type: 'SET_SEARCH', payload: query });
  }, []);

  const filteredNews = useMemo(() =>
    newsList.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [newsList, searchQuery]
  );

  return {
    newsList,
    filteredNews,
    isFormOpen,
    searchQuery,
    likePost,
    dislikePost,
    addPost,
    toggleForm,
    handleSearch,
  };
};
