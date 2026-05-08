import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Carsoul from '../components/carsoul/Carsoul.jsx';
import CardList from '../components/cardList/cardList.jsx';
import { fetchNews, likePost, dislikePost } from '../store/slices/newsSlice';

function HomePage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { i18n } = useTranslation();
  const { items: news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews(i18n.language));
  }, [dispatch, i18n.language]);

  const handleLike = (id) => dispatch(likePost(id));
  const handleDislike = (id) => dispatch(dislikePost(id));

  const handleCreateClick = () => {
    navigate(isAuthenticated ? '/create' : '/login');
  };

  if (loading) return <div className="page-placeholder">{t('loading')}...</div>;
  if (error) return <div className="page-placeholder">{t('error')}: {error}</div>;

  return (
    <main className="tech-news-shell">
      <Carsoul />
      <div className="content-section">
        <h2 className="section-title">{t('home.latestNews')}</h2>
        <CardList
          news={news}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>

      <button
        className="fab-create-post"
        onClick={handleCreateClick}
        title={isAuthenticated ? t('home.createPostTitle') : t('home.loginToCreate')}
      >
        <FiPlus size={28} />
      </button>
    </main>
  );
}

export default HomePage;
