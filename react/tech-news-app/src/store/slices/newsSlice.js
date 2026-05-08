import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async (lang) => {
  const fileName = lang === 'ar' ? 'news_ar.json' : 'news.json';
  const response = await axios.get(`/data/${fileName}`);
  return response.data;
});

const loadUserPosts = () => {
  try {
    const saved = localStorage.getItem('tech_news_user_posts');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

const saveUserPosts = (posts) => {
  localStorage.setItem('tech_news_user_posts', JSON.stringify(posts));
};

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    userPosts: loadUserPosts(),
    loading: false,
    error: null,
  },
  reducers: {
    likePost: (state, action) => {
      let post = state.items.find(item => item.id === action.payload);
      if (post) {
        post.likes += 1;
      } else {
        post = state.userPosts.find(item => item.id === action.payload);
        if (post) {
          post.likes += 1;
          saveUserPosts(state.userPosts);
        }
      }
    },
    dislikePost: (state, action) => {
      let post = state.items.find(item => item.id === action.payload);
      if (post) {
        post.dislikes += 1;
      } else {
        post = state.userPosts.find(item => item.id === action.payload);
        if (post) {
          post.dislikes += 1;
          saveUserPosts(state.userPosts);
        }
      }
    },
    addPost: (state, action) => {
      const newPost = {
        ...action.payload,
        id: `user-${Date.now()}`,
        likes: 0,
        dislikes: 0,
        comments: 0,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        tags: typeof action.payload.tags === 'string' 
          ? action.payload.tags.split(',').map(tag => tag.trim()).filter(Boolean)
          : action.payload.tags || []
      };
      state.userPosts = [newPost, ...state.userPosts];
      saveUserPosts(state.userPosts);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { likePost, dislikePost, addPost } = newsSlice.actions;
export default newsSlice.reducer;
