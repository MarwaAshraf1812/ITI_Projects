import './App.css';
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import CardList from './components/cardList/cardList.jsx';
import PostForm from './components/form/Form.jsx';
import { useNews } from './hooks/useNews';

const App = () => {
  const { news, likePost, dislikePost, addPost, stats } = useNews();

  return (
    <main className="tech-news-shell">
      <Navbar />
      <PostForm onAddPost={addPost} />

      <div className="content-section">
        <header className="section-header">
          <h2 className="section-title">Latest Tech News</h2>
          <div className="news-stats">
            <span>Total: {stats.totalPosts}</span> | 
            <span> Likes: {stats.totalLikes}</span> | 
            <span> Dislikes: {stats.totalDislikes}</span>
          </div>
        </header>

        <CardList 
          newsList={news} 
          onLike={likePost} 
          onDislike={dislikePost} 
        />
      </div>
      <Footer />
    </main>
  );
};

export default App;
