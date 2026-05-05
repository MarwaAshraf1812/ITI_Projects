import { FiPlus } from 'react-icons/fi';
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Carsoul from './components/carsoul/Carsoul.jsx';
import CardList from './components/cardList/cardList.jsx';
import PostForm from './components/form/PostForm.jsx';
import { useNews } from './hooks/useNews.js';

function App() {
  const {
    filteredNews,
    isFormOpen,
    searchQuery,
    likePost,
    dislikePost,
    addPost,
    toggleForm,
    handleSearch,
  } = useNews();

  return (
    <main className="tech-news-shell">
      <Navbar handleSearch={handleSearch} search={searchQuery} />
      <Carsoul />
      <PostForm isOpen={isFormOpen} onClose={toggleForm} addPost={addPost} />
      <div className="content-section">
        <h2 className="section-title">Latest Tech News</h2>
        <CardList
          news={filteredNews}
          onLike={likePost}
          onDislike={dislikePost}
        />
      </div>

      <button className="fab-create-post" onClick={toggleForm}>
        <FiPlus size={28} />
      </button>

      <Footer />
    </main>
  );
}

export default App;
