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
            excerpt={item.excerpt}
            image={item.image}
            date={item.date}
            category={item.category}
          />
        ))}
      </section>
    );
  }
}

export default CardList;
