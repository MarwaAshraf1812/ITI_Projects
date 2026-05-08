import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async (lang) => {
  const fileName = lang === 'ar' ? 'news_ar.json' : 'news.json';
  const response = await axios.get(`/data/${fileName}`);
  return response.data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    likePost: (state, action) => {
      const post = state.items.find(item => item.id === action.payload);
      if (post) post.likes += 1;
    },
    dislikePost: (state, action) => {
      const post = state.items.find(item => item.id === action.payload);
      if (post) post.dislikes += 1;
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

export const { likePost, dislikePost } = newsSlice.actions;
export default newsSlice.reducer;
