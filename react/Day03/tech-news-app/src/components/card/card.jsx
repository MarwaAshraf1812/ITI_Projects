import { Component } from "react";
import { FiArrowUp, FiMessageSquare, FiBookmark, FiLink } from "react-icons/fi";
import { BiDownvote } from "react-icons/bi";
import "./card.css";

class Card extends Component {
  state = {
    likes: this.props.likes,
    dislikes: this.props.dislikes,
  }

  handleLike = (e) => {
    this.setState((prev) => ({ likes: prev.likes + 1 }));
    
  }

  handleDislike = (e) => {
    this.setState((prev) => ({ dislikes: prev.dislikes + 1 }));
  }
  render() {
    const { title, image, date, category, time, tags, comments } = this.props;
    const authorImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    const { likes, dislikes } = this.state;

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
            <button className="action-btn" onClick={this.handleLike}>
              <FiArrowUp /> {likes}
            </button>
            <button className="action-btn" onClick={this.handleDislike}>
              <BiDownvote style={{ fontSize: '1.2rem' }} /> {dislikes}
            </button>
            <button className="action-btn">
              <FiMessageSquare /> {comments}
            </button>
          </div>
          <div className="card-actions">
            <button className="action-btn">
              <FiBookmark />
            </button>
            <button className="action-btn">
              <FiLink />
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
