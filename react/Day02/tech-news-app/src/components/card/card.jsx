import { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const { title, excerpt, image, date, category } = this.props;
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
        </div>
      </article>
    );
  }
}
export default Card;