import Card from '../card/card';
import './cardList.css';

function CardList({ news, onLike, onDislike }) {
  return (
    <section className="news-grid">
      {news.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          category={item.category}
          time={item.time}
          tags={item.tags}
          likes={item.likes}
          dislikes={item.dislikes}
          comments={item.comments}
          onLike={onLike}
          onDislike={onDislike}
        />
      ))}
    </section>
  );
}

export default CardList;
