import { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode, onSignUpClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-row">
          <div className="navbar-left">
            <a href="#" className="navbar-brand group">
              <div className="navbar-brand-icon-wrapper">
                <svg className="navbar-brand-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 10V19H13V13H11V19H5V10L12 5L19 10ZM12 3L3 9V21H21V9L12 3Z" />
                </svg>
              </div>
              <span className="navbar-brand-text">
                Work<span className="text-sky-500">cation</span>
              </span>
            </a>

            <div className="navbar-links">
              <a href="#" className="nav-link-active">
                Find Homes
              </a>
              <a href="#" className="nav-link">
                Popular Destinations
              </a>
              <a href="#" className="nav-link">
                List Your Property
              </a>
              <a href="#" className="nav-link">
                Support
              </a>
            </div>
          </div>

          <div className="navbar-right">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-amber-500 transition-transform duration-500 hover:rotate-45" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 2.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-4 4.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-2.293a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm2.293-5.707a1 1 0 011.414 0l.707.707A1 1 0 015.707 6.414l-.707-.707a1 1 0 010-1.414zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-transform duration-500 hover:-rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={onSignUpClick}
              className="btn-get-started"
            >
              Get Started
            </button>
          </div>

          <div className="navbar-mobile-wrapper">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 2.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-4 4.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-2.293a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm2.293-5.707a1 1 0 011.414 0l.707.707A1 1 0 015.707 6.414l-.707-.707a1 1 0 010-1.414zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle main menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            <a
              href="#"
              className="mobile-nav-link-active"
              onClick={() => setIsOpen(false)}
            >
              Find Homes
            </a>
            <a
              href="#"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Popular Destinations
            </a>
            <a
              href="#"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              List Your Property
            </a>
            <a
              href="#"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Support
            </a>
          </div>

          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
            <button
              onClick={() => {
                setIsOpen(false);
                onSignUpClick();
              }}
              className="btn-get-started-mobile"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}