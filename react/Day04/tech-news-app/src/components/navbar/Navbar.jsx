import { useReducer, useCallback, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
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
  const [state, dispatch] = useReducer(navReducer, initialState);
  const { isMenuOpen, isProfileOpen } = state;
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        dispatch({ type: 'CLOSE_ALL' });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = useCallback(() => dispatch({ type: 'TOGGLE_MENU' }), []);
  const toggleProfile = useCallback(() => dispatch({ type: 'TOGGLE_PROFILE' }), []);

  const handleLogout = useCallback(() => {
    logout();
    dispatch({ type: 'CLOSE_ALL' });
    navigate('/');
  }, [logout, navigate]);

  return (
    <header className="site-header" aria-label="Main Navigation">
      <nav className="navbar">

        <Link to="/" className="brand">
          <span className="brand-mark">D</span>
          <span>DevNews</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
          <NavLink to="/explore" className={({ isActive }) => isActive ? 'nav-active' : ''}>Explore</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'nav-active' : ''}>Community</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-active' : ''}>Resources</NavLink>
        </div>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <span className="search-icon"></span>
          <input
            type="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search tech news"
          />
        </form>

    
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
                  <Link to="/create" className="dropdown-item" onClick={() => dispatch({ type: 'CLOSE_ALL' })}>
                    Create Post
                  </Link>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="nav-guest-actions">
              <NavLink to="/login" className="nav-login-btn">Login</NavLink>
              <NavLink to="/signup" className="nav-join-btn">Join Us</NavLink>
            </div>
          )}
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
