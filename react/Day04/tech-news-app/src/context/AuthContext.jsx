import { createContext, useContext, useReducer, useCallback } from 'react';

const STORAGE_USERS_KEY = 'devnews_users';
const STORAGE_AUTH_KEY  = 'devnews_auth';

const getStoredUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY)) || [];
  } catch { return []; }
};

export const registerUser = (userData) => {
  const users = getStoredUsers();
  if (users.find(u => u.username === userData.username)) {
    return { success: false, error: 'Username already exists.' };
  }
  users.push(userData);
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  return { success: true };
};

export const validateUser = (username, password) => {
  const users = getStoredUsers();
  const user = users.find(u => u.username === username && u.password === password);
  return user ? { success: true, user: { username: user.username, email: user.email } }
              : { success: false, error: 'Invalid username or password.' };
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const storedSession = (() => {
  try { return JSON.parse(localStorage.getItem(STORAGE_AUTH_KEY)); }
  catch { return null; }
})();

const initialState = storedSession
  ? { isAuthenticated: true, user: storedSession }
  : { isAuthenticated: false, user: null };

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback((userData) => {
    localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(userData));
    dispatch({ type: 'LOGIN', payload: userData });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_AUTH_KEY);
    dispatch({ type: 'LOGOUT' });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
