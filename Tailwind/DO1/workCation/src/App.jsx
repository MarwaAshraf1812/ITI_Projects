import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Workcation from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSignUpClick={() => setShowSignUpModal(true)}
      />
      <Workcation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* SignUp Modal Overlay */}
      {showSignUpModal && (
        <div className="modal-overlay">
          <div className="relative animate-scale-up">
            <SignUp
              onClose={() => setShowSignUpModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
