import { Component } from "react";
import { FiArrowUp, FiMessageSquare, FiBookmark, FiLink } from "react-icons/fi";
import { BiDownvote } from "react-icons/bi";
import "./card.css";

class Card extends Component {
  render() {
    const { title, image, date, category, time, tags } = this.props;
    const authorImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    
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
            <button className="action-btn" aria-label="Upvote">
              <FiArrowUp /> 356
            </button>
            <button className="action-btn" aria-label="Downvote">
              <BiDownvote style={{ fontSize: '1.2rem' }} />
            </button>
            <button className="action-btn" aria-label="Comment">
              <FiMessageSquare /> 41
            </button>
          </div>
          <div className="card-actions">
            <button className="action-btn" aria-label="Bookmark">
              <FiBookmark />
            </button>
            <button className="action-btn" aria-label="Share">
              <FiLink />
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
