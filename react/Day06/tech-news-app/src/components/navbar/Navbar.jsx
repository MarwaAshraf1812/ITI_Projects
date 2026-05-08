import { useReducer, useCallback, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { toggleTheme } from '../../store/slices/themeSlice';

import './Navbar.css';

const initialState = {
  isMenuOpen: false,
  isProfileOpen: false,
};

function navReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen, isProfileOpen: false };
    case 'TOGGLE_PROFILE':
      return { ...state, isProfileOpen: !state.isProfileOpen, isMenuOpen: false };
    case 'CLOSE_ALL':
      return { isMenuOpen: false, isProfileOpen: false };
    default:
      return state;
  }
}

function Navbar({ handleSearch, search }) {
  const { t, i18n } = useTranslation();
  const [state, localDispatch] = useReducer(navReducer, initialState);
  const { isMenuOpen, isProfileOpen } = state;
  
  const { mode } = useSelector((state) => state.theme);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        localDispatch({ type: 'CLOSE_ALL' });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = useCallback(() => localDispatch({ type: 'TOGGLE_MENU' }), []);
  const toggleProfile = useCallback(() => localDispatch({ type: 'TOGGLE_PROFILE' }), []);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    localDispatch({ type: 'CLOSE_ALL' });
    navigate('/');
  }, [dispatch, navigate]);

  const toggleLanguage = useCallback(() => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  }, [i18n]);

  return (
    <header className="site-header" aria-label="Main Navigation">
      <nav className="navbar">

        <Link to="/" className="brand">
          <span className="brand-mark">D</span>
          <span>{t('navbar.brand')}</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>{t('navbar.home')}</NavLink>
          <NavLink to="/explore" className={({ isActive }) => isActive ? 'nav-active' : ''}>{t('navbar.explore')}</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'nav-active' : ''}>{t('navbar.community')}</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-active' : ''}>{t('navbar.resources')}</NavLink>
        </div>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <span className="search-icon"></span>
          <input
            type="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t('navbar.searchPlaceholder')}
          />
        </form>

        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme">
            {mode === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button className="lang-toggle-btn" onClick={toggleLanguage} aria-label="Toggle language">
            <MdLanguage size={20} />
            <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <div className="nav-auth">
            {isAuthenticated ? (
              <div className="profile-wrapper" ref={profileRef}>
                <button className="profile-btn" onClick={toggleProfile} aria-label="Profile menu">
                  <span className="profile-avatar">👤</span>
                  <span className="profile-username">{user?.username}</span>
                  <span className={`profile-chevron ${isProfileOpen ? 'open' : ''}`}>▾</span>
                </button>

                {isProfileOpen && (
                  <div className="profile-dropdown">
                    <Link to="/create" className="dropdown-item" onClick={() => localDispatch({ type: 'CLOSE_ALL' })}>
                      {t('navbar.createPost')}
                    </Link>
                    <div className="dropdown-divider" />
                    <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                      {t('navbar.logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="nav-guest-actions">
                <NavLink to="/login" className="nav-login-btn">{t('navbar.login')}</NavLink>
                <NavLink to="/signup" className="nav-join-btn">{t('navbar.joinUs')}</NavLink>
              </div>
            )}
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
