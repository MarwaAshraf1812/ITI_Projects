import { useReducer, useCallback } from 'react';
import './Navbar.css';

const initialState = {
  isMenuOpen: false,
  isSearchOpen: false,
};

function navReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { isMenuOpen: !state.isMenuOpen, isSearchOpen: false };
    case 'TOGGLE_SEARCH':
      return { isSearchOpen: !state.isSearchOpen, isMenuOpen: false };
    default:
      return state;
  }
}

function Navbar({ handleSearch, search }) {
  const [state, dispatch] = useReducer(navReducer, initialState);
  const { isMenuOpen, isSearchOpen } = state;

  const toggleMenu = useCallback(() => {
    dispatch({ type: 'TOGGLE_MENU' });
  }, []);

  const toggleSearch = useCallback(() => {
    dispatch({ type: 'TOGGLE_SEARCH' });
  }, []);

  return (
    <header className="site-header" aria-label="Main Navigation">
      <nav className="navbar">
        <a className="brand">
          <span className="brand-mark">D</span>
          <span>DevNews</span>
        </a>

        <div className="navbar-actions">
          <button
            className={`search-toggle ${isSearchOpen ? 'active' : ''}`}
            onClick={toggleSearch}
          >
            <span className="search-icon"></span>
          </button>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Community</a>
          <a href="#">Resources</a>
        </div>

        <form className={`search-form ${isSearchOpen ? 'open' : ''}`} onSubmit={(e) => e.preventDefault()}>
          <span className="search-icon"></span>
          <input
            type="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search tech news"
            autoFocus={isSearchOpen}
          />
        </form>
      </nav>
    </header>
  );
}

export default Navbar;
