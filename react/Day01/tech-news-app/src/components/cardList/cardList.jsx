import Card from "../card/card";
import "./cardList.css";

const CardList = () => {
  const newsList = [
    {
      id:1,
      title: "AI Breakthrough Promises to Revolutionize Medicine",
      excerpt: "Researchers have developed a new AI model that can predict diseases with 95% accuracy, potentially changing healthcare forever.",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      category: "AI"
    },
    {
      id:2,
      title: "AI Breakthrough Promises to Revolutionize Medicine",
      excerpt: "Researchers have developed a new AI model that can predict diseases with 95% accuracy, potentially changing healthcare forever.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      category: "AI"
    },
    {
      id:3,
      title: "AI Breakthrough Promises to Revolutionize Medicine",
      excerpt: "Researchers have developed a new AI model that can predict diseases with 95% accuracy, potentially changing healthcare forever.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      category: "AI"
    },
    {
      id:4,
      title: "AI Breakthrough Promises to Revolutionize Medicine",
      excerpt: "Researchers have developed a new AI model that can predict diseases with 95% accuracy, potentially changing healthcare forever.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      category: "AI"
    },
    {
      id:5,
      title: "AI Breakthrough Promises to Revolutionize Medicine",
      excerpt: "Researchers have developed a new AI model that can predict diseases with 95% accuracy, potentially changing healthcare forever.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      category: "AI"
    },
    {
      id:6,
      title: "AI Breakthrough Promises to Revolutionize Medicine",
      excerpt: "Researchers have developed a new AI model that can predict diseases with 95% accuracy, potentially changing healthcare forever.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      category: "AI"
    },
];

    return (
      <section className="news-grid">
        {newsList.map((item) => (
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

export default CardList;
