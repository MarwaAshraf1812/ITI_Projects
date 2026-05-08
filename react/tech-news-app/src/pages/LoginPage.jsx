import { useReducer, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';

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
  const { t } = useTranslation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(loginReducer, initialState);
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
    if (!formState.username || !formState.password) {
      toast.error(t('login.errors.fillAll'));
      return;
    }

    dispatch(loginSuccess({ identifier: formState.username, password: formState.password }));

  }, [formState, dispatch, t]);

  useEffect(() => {
    if (isAuthenticated && user) {
      toast.success(t('login.success', { username: user.username }));
    } else if (!isAuthenticated && formState.username && formState.password) {

    }
  }, [isAuthenticated, user, t]);

  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="login-brand">
          <span className="brand-mark">D</span>
          <span>{t('navbar.brand')}</span>
        </Link>

        <h1 className="login-title">{t('login.title')}</h1>
        <p className="login-subtitle">{t('login.subtitle')}</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">{t('login.username')}</label>
            <input
              type="text"
              id="username"
              placeholder={t('login.usernamePlaceholder')}
              value={formState.username}
              onChange={handleChange}
              autoFocus
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">{t('login.password')}</label>
            <input
              type="password"
              id="password"
              placeholder={t('login.passwordPlaceholder')}
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">{t('login.signIn')}</button>
        </form>

        <p className="login-footer-text">
          {t('login.noAccount')}{' '}
          <Link to="/signup" className="login-link">{t('login.signUp')}</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
