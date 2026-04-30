import { Component } from "react";
import Card from "../card/card";
import "./cardList.css";

class CardList extends Component {
  render() {
    const { news } = this.props;
    return (
      <section className="news-grid">
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            date={item.date}
            category={item.category}
            time={item.time}
            tags={item.tags}
            likes={item.likes}
            dislikes={item.dislikes}
            comments={item.comments}
          />
        ))}
      </section>
    );
  }
}

export default CardList;
