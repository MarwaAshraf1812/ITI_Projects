import './App.css';
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import CardList from './components/cardList/cardList.jsx';
import PostForm from './components/form/Form.jsx';

const App = () => {
  return (
    <main className="tech-news-shell">
      <Navbar />
      
      <PostForm />

      <div className="content-section">
        <h2 className="section-title">Latest Tech News</h2>
        <CardList />
      </div>
      
      <Footer />
    </main>
  );
};

export default App;
