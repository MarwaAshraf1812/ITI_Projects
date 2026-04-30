import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isSearchOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ 
      isMenuOpen: !prevState.isMenuOpen,
      isSearchOpen: false 
    }));
  };

  toggleSearch = () => {
    this.setState(prevState => ({ 
      isSearchOpen: !prevState.isSearchOpen,
      isMenuOpen: false 
    }));
  };

  render() {
    const { isMenuOpen, isSearchOpen } = this.state;
    return (
      <header className="site-header" aria-label="Main Navigation">
        <nav className="navbar">
          <a className="brand">
            <span className="brand-mark">N</span>
            <span>NovaWire</span>
          </a>

          <div className="navbar-actions">
            <button 
              className={`search-toggle ${isSearchOpen ? 'active' : ''}`} 
              onClick={this.toggleSearch} 
              aria-label="Toggle search"
            >
              <span className="search-icon"></span>
            </button>

            <button className="menu-toggle" onClick={this.toggleMenu} aria-label="Toggle menu">
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
  }
}

export default Navbar;
