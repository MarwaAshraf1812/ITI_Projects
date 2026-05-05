import { useReducer, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth, validateUser } from '../context/AuthContext.jsx';
import './LoginPage.css';

const initialState = { username: '', password: '' };

function loginReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function LoginPage() {
  const [formState, dispatch] = useReducer(loginReducer, initialState);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!formState.username || !formState.password) {
      toast.error('Please fill in all fields.');
      return;
    }

    const result = validateUser(formState.username, formState.password);
    if (!result.success) {
      toast.error(result.error);
      return;
    }

    login(result.user);
    toast.success(`Welcome back, ${result.user.username}! 👋`);
    navigate('/');
  }, [formState, login, navigate]);

  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="login-brand">
          <span className="brand-mark">D</span>
          <span>DevNews</span>
        </Link>

        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">Sign in to create and manage your posts.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={formState.username}
              onChange={handleChange}
              autoFocus
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Sign In</button>
        </form>

        <p className="login-footer-text">
          Don't have an account?{' '}
          <Link to="/signup" className="login-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
