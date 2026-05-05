import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./card.css";

const Card = ({ title, excerpt, image, date, category, likes, dislikes, onLike, onDislike }) => {
    return (
      <article className="news-card">
        <div className="card-image">
          <img src={image} alt={title} />
          <span className="card-category">{category}</span>
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-excerpt">{excerpt}</p>
          <time className="card-date">{date}</time>
          
          <div className="card-actions">
            <button 
              className="action-btn like-btn" 
              onClick={onLike}
              aria-label="Like post"
            >
              <FaArrowUp /> <span>{likes}</span>
            </button>
            <button 
              className="action-btn dislike-btn" 
              onClick={onDislike}
              aria-label="Dislike post"
            >
              <FaArrowDown /> <span>{dislikes}</span>
            </button>
          </div>
        </div>
      </article>
    );
}

export default Card; 