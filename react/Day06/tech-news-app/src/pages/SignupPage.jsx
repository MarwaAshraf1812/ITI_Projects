import { useReducer, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/slices/authSlice';

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
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(signupReducer, initialState);

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = useCallback((e) => {
    formDispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { username, email, password, confirm } = formState;

    if (!username || !email || !password || !confirm) {
      toast.error(t('signup.errors.fillAll'));
      return;
    }
    if (username.length < 3) {
      toast.error(t('signup.errors.usernameLength'));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t('signup.errors.invalidEmail'));
      return;
    }
    if (password.length < 6) {
      toast.error(t('signup.errors.passwordLength'));
      return;
    }
    if (password !== confirm) {
      toast.error(t('signup.errors.passwordMismatch'));
      return;
    }

    dispatch(register({ username, email, password }));
    toast.success(t('signup.success', { username }));
    navigate('/');
  }, [formState, navigate, t, dispatch]);

  return (
    <div className="login-page">
      <div className="login-card signup-card">
        <Link to="/" className="login-brand">
          <span className="brand-mark">D</span>
          <span>{t('navbar.brand')}</span>
        </Link>

        <h1 className="login-title">{t('signup.title')}</h1>
        <p className="login-subtitle">{t('signup.subtitle')}</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">{t('signup.username')}</label>
            <input
              type="text"
              id="username"
              placeholder={t('signup.usernamePlaceholder')}
              value={formState.username}
              onChange={handleChange}
              autoFocus
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">{t('signup.email')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('signup.emailPlaceholder')}
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-row">
            <div className="input-group">
              <label htmlFor="password">{t('signup.password')}</label>
              <input
                type="password"
                id="password"
                placeholder={t('signup.passwordPlaceholder')}
                value={formState.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm">{t('signup.confirmPassword')}</label>
              <input
                type="password"
                id="confirm"
                placeholder={t('signup.confirmPasswordPlaceholder')}
                value={formState.confirm}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">{t('signup.createAccount')}</button>
        </form>

        <p className="login-footer-text">
          {t('signup.alreadyAccount')}{' '}
          <Link to="/login" className="login-link">{t('signup.signIn')}</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
