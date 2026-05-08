import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, dislikePost, fetchNews } from '../store/slices/newsSlice';

import { FiArrowLeft, FiArrowUp, FiMessageSquare, FiBookmark } from 'react-icons/fi';
import { BiDownvote } from 'react-icons/bi';
import './ArticlePage.css';

const authorImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

function ArticlePage() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: newsList, userPosts, loading } = useSelector((state) => state.news);

  useEffect(() => {
    if (newsList.length === 0) {
      dispatch(fetchNews(i18n.language));
    }
  }, [dispatch, i18n.language, newsList.length]);

  const article = newsList.find(item => String(item.id) === String(id)) || 
                  userPosts.find(item => String(item.id) === String(id));

  const handleLike = (id) => dispatch(likePost(id));
  const handleDislike = (id) => dispatch(dislikePost(id));

  if (loading && newsList.length === 0) {
    return <div className="page-placeholder">{t('loading')}...</div>;
  }

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>{t('article.notFound')}</h2>
        <Link to="/" className="back-link">{t('article.backToHome')}</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">

        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={18} />
          {t('article.back')}
        </button>

        <div className="article-meta-top">
          <span className="article-category">
            {t(`createPost.categories.${article.category}`, { defaultValue: article.category })}
          </span>
          <span className="article-date">{article.date}</span>
          <span className="article-time">{article.time}</span>
        </div>

        <h1 className="article-title">{article.title}</h1>

        <div className="article-tags">
          {article.tags && article.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        <div className="article-author">
          <img src={authorImage} alt="Author" className="author-avatar" />
          <div>
            <span className="author-name">{t('article.editorial')}</span>
            <span className="author-role">{t('article.staffWriter')}</span>
          </div>
        </div>

        <div className="article-hero-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article-body">
          <p>{article.content}</p>
        </div>

        <div className="article-actions">
          <button className="action-btn like-btn" onClick={() => handleLike(article.id)}>
            <FiArrowUp size={18} /> {article.likes}
          </button>
          <button className="action-btn dislike-btn" onClick={() => handleDislike(article.id)}>
            <BiDownvote size={18} /> {article.dislikes}
          </button>
          <button className="action-btn">
            <FiMessageSquare size={18} /> {article.comments}
          </button>
          <button className="action-btn">
            <FiBookmark size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default ArticlePage;
