import { useCallback } from 'react';
import { FiArrowUp, FiMessageSquare, FiBookmark, FiLink } from 'react-icons/fi';
import { BiDownvote } from 'react-icons/bi';
import ActionButton from './ActionButton';
import './card.css';

const authorImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';


function Card({ id, title, image, date, category, time, tags, likes, dislikes, comments, onLike, onDislike }) {
  const handleLike = useCallback(() => {
    onLike(id);
  }, [id, onLike]);

  const handleDislike = useCallback(() => {
    onDislike(id);
  }, [id, onDislike]);

  return (
    <article className="news-card">
      <div className="card-header">
        <img src={authorImage} alt="Author" className="author-avatar" />
        <span className="card-category">{category}</span>
      </div>
      <div className="card-body-text">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
        <div className="card-tags">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-footer">
        <div className="card-actions">
          <ActionButton icon={FiArrowUp} count={likes} onClick={handleLike} className="like-btn" />
          <ActionButton icon={BiDownvote} count={dislikes} onClick={handleDislike} className="dislike-btn" />
          <ActionButton icon={FiMessageSquare} count={comments} />
        </div>
        <div className="card-actions">
          <ActionButton icon={FiBookmark} />
          <ActionButton icon={FiLink} />
        </div>
      </div>
    </article>
  );
}

export default Card;
