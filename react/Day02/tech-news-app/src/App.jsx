import { Component } from 'react';
import { FiPlus } from 'react-icons/fi';
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Carsoul from './components/carsoul/Carsoul.jsx';
import CardList from './components/cardList/cardList.jsx';
import PostForm from './components/form/PostForm.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsList: [],
      isFormOpen: false
    };
  }

  toggleForm = () => {
    this.setState(prevState => ({ isFormOpen: !prevState.isFormOpen }));
  };

  componentDidMount() {
    axios.get('./data/news.json')
      .then(res => {
        this.setState({ newsList: res.data })
      })
      .catch(error => console.error('Error fetching news:', error));
  }

  render() {
    return (
      <main className="tech-news-shell">
        <Navbar />
        <Carsoul />
        <PostForm isOpen={this.state.isFormOpen} onClose={this.toggleForm} />
        <div className="content-section">
          <h2 className="section-title">Latest Tech News</h2>
          <CardList news={this.state.newsList} />
        </div>

        <button
          className="fab-create-post"
          onClick={this.toggleForm}>
          <FiPlus size={28} />
        </button>

        <Footer />
      </main>
    );
  }
}

export default App;
