import { createSlice } from '@reduxjs/toolkit';

const savedUser = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
  user: savedUser || null,
  isAuthenticated: !!savedUser || false,
  allUsers: JSON.parse(localStorage.getItem('Users')) || []
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess:(state, action) => {
      const { identifier, password } = action.payload;
      const user = state.allUsers.find(user =>
        (user.email === identifier || user.username === identifier) && user.password === password
      );
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem('user');
      }
    },
    register: (state, action) => {
      const newUser = action.payload;
      const existingUser = state.allUsers.find(user => user.email === newUser.email);
      if (existingUser) {
        return state;
      } else {
        state.allUsers.push(newUser);
        state.user = newUser;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('Users', JSON.stringify(state.allUsers));
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    }
  }
})

export const { loginSuccess, register, logout } = authSlice.actions;

export default authSlice.reducer;