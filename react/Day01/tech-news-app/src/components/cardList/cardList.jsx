import { useMemo } from "react";
import Card from "../card/card";
import "./cardList.css";


const CardList = ({ newsList, onLike, onDislike }) => {
  const renderedCards = useMemo(() => {
    return newsList.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        excerpt={item.excerpt}
        image={item.image}
        date={item.date}
        category={item.category}
        likes={item.likes}
        dislikes={item.dislikes}
        onLike={() => onLike(item.id)}
        onDislike={() => onDislike(item.id)}
      />
    ));
  }, [newsList, onLike, onDislike]);

  return (
    <section className="news-grid">
      {renderedCards}
    </section>
  );
}

export default CardList;
