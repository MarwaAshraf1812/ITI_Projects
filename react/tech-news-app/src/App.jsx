import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import HomePage from './pages/HomePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import { useTranslation } from 'react-i18next';
import './App.css';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

function Layout() {
  const { i18n } = useTranslation();
  const { mode } = useSelector((state) => state.theme);
  const searchQuery = "";
  const handleSearch = () => {};

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
    document.body.className = `${mode}-theme`;
  }, [i18n.language, mode]);

  return (
    <div className="tech-news-shell">
      <Navbar handleSearch={handleSearch} search={searchQuery} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          }
        />
        <Route path="/explore"    element={<div className="page-placeholder"><h2>Explore — Coming Soon</h2></div>} />
        <Route path="/community"  element={<div className="page-placeholder"><h2>Community — Coming Soon</h2></div>} />
        <Route path="/resources"  element={<div className="page-placeholder"><h2>Resources — Coming Soon</h2></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <Layout />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3500,
              style: {
                background: '#1e1e2e',
                color: '#e2e8f0',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                padding: '12px 16px',
              },
              success: {
                iconTheme: { primary: '#22c55e', secondary: '#1e1e2e' },
              },
              error: {
                iconTheme: { primary: '#ef4444', secondary: '#1e1e2e' },
              },
            }}
          />

    </BrowserRouter>
  );
}

export default App;
