import Carsoul from '../components/carsoul/Carsoul.jsx';
import CardList from '../components/cardList/cardList.jsx';
import { useNewsContext } from '../context/NewsContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function HomePage() {
  const { filteredNews, likePost, dislikePost } = useNewsContext();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(isAuthenticated ? '/create' : '/login');
  };

  return (
    <main className="tech-news-shell">
      <Carsoul />
      <div className="content-section">
        <h2 className="section-title">Latest Tech News</h2>
        <CardList
          news={filteredNews}
          onLike={likePost}
          onDislike={dislikePost}
        />
      </div>

      <button
        className="fab-create-post"
        onClick={handleCreateClick}
        title={isAuthenticated ? 'Create Post' : 'Login to Create'}
      >
        <FiPlus size={28} />
      </button>
    </main>
  );
}

export default HomePage;
