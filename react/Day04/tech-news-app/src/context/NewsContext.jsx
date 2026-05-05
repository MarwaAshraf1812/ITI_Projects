import { createContext, useContext } from 'react';
import { useNews } from '../hooks/useNews.js';

const NewsContext = createContext(null);

export function NewsProvider({ children }) {
  const news = useNews();
  return (
    <NewsContext.Provider value={news}>
      {children}
    </NewsContext.Provider>
  );
}

export const useNewsContext = () => {
  const ctx = useContext(NewsContext);
  if (!ctx) throw new Error('useNewsContext must be used inside NewsProvider');
  return ctx;
};
