import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header" aria-label="Main Navigation">
      <nav className="navbar">
        <a className="brand" href="#">
          <span className="brand-mark">N</span>
          <span>NovaWire</span>
        </a>

        <div className="navbar-actions">
          <button 
            className={`search-toggle ${isSearchOpen ? 'active' : ''}`} 
            onClick={toggleSearch} 
            aria-label="Toggle search"
          >
            <span className="search-icon"></span>
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Sections">
          <a href="#">AI</a>
          <a href="#">Startups</a>
          <a href="#">Security</a>
          <a href="#">Reviews</a>
        </div>

        <form className={`search-form ${isSearchOpen ? 'open' : ''}`}>
          <span className="search-icon" aria-hidden="true"></span>
          <input
            type="search"
            placeholder="Search tech news"
            aria-label="Search tech news"
            autoFocus={isSearchOpen}
          />
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
