import { useReducer, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth, registerUser } from '../context/AuthContext.jsx';
import './LoginPage.css';
import './SignupPage.css';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirm: '',
};

function signupReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function SignupPage() {
  const [formState, dispatch] = useReducer(signupReducer, initialState);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { username, email, password, confirm } = formState;

    if (!username || !email || !password || !confirm) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (username.length < 3) {
      toast.error('Username must be at least 3 characters.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      toast.error('Passwords do not match.');
      return;
    }

    const result = registerUser({ username, email, password });
    if (!result.success) {
      toast.error(result.error);
      return;
    }

    login({ username, email });
    toast.success(`Account created! Welcome, ${username}! 🎉`);
    navigate('/');
  }, [formState, login, navigate]);

  return (
    <div className="login-page">
      <div className="login-card signup-card">
        <Link to="/" className="login-brand">
          <span className="brand-mark">D</span>
          <span>DevNews</span>
        </Link>

        <h1 className="login-title">Create account</h1>
        <p className="login-subtitle">Join DevNews and start sharing tech insights.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              value={formState.username}
              onChange={handleChange}
              autoFocus
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-row">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Min. 6 characters"
                value={formState.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                id="confirm"
                placeholder="Repeat password"
                value={formState.confirm}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">Create Account</button>
        </form>

        <p className="login-footer-text">
          Already have an account?{' '}
          <Link to="/login" className="login-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
