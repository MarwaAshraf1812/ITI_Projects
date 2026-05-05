import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext.jsx';
import { FiArrowLeft, FiArrowUp, FiMessageSquare, FiBookmark } from 'react-icons/fi';
import { BiDownvote } from 'react-icons/bi';
import './ArticlePage.css';

const authorImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { newsList, likePost, dislikePost } = useNewsContext();

  const article = newsList.find(item => item.id === Number(id));

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article not found</h2>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">

        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={18} />
          Back
        </button>

        <div className="article-meta-top">
          <span className="article-category">{article.category}</span>
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
            <span className="author-name">DevNews Editorial</span>
            <span className="author-role">Staff Writer</span>
          </div>
        </div>

        <div className="article-hero-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article-body">
          <p>{article.content}</p>
        </div>

        <div className="article-actions">
          <button className="action-btn like-btn" onClick={() => likePost(article.id)}>
            <FiArrowUp size={18} /> {article.likes}
          </button>
          <button className="action-btn dislike-btn" onClick={() => dislikePost(article.id)}>
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
