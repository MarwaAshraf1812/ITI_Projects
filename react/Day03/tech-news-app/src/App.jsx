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

  addPost = (newPost) => {
    newPost = {
      id: this.state.newsList.length + 1,
      title: newPost.title,
      image: newPost.image,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      category: newPost.category,
      time: newPost.time,
      tags: newPost.tags.split(',').map(tag => tag.trim()),
      likes: 0,
      dislikes: 0,
      comments: 0
    };

    axios.post('./data/news.json', newPost)
    .then(res => {
      this.setState(prev => ({
        newsList: [...prev.newsList, newPost]
      }));
    })
    .catch(error => console.error('Error adding post:', error));
  }

  render() {
    return (
      <main className="tech-news-shell">
        <Navbar />
        <Carsoul />
        <PostForm isOpen={this.state.isFormOpen} onClose={this.toggleForm} addPost={this.addPost} />
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
