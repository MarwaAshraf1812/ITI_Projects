import React, { Component } from 'react';
import { FiX } from 'react-icons/fi';
import "./Form.css";
import axios from 'axios';

class PostForm extends Component {
  state = {
    title: '',
    category: 'AI',
    image: '',
    time: '',
    tags: ''
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", this.state);
    this.props.addPost(this.state);
    this.props.onClose();
    this.setState({
      title: '',
      category: '',
      image: '',
      time: '',
      tags: ''
    });
  }

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <section className={`form-overlay ${isOpen ? 'is-open' : ''}`}>
        <div className="overlay-bg" onClick={onClose}></div>
        <div className="form-card sidebar-drawer">
          <button className="close-btn" onClick={onClose}>
            <FiX size={24} />
          </button>

          <h2 className="form-title">Create New Post</h2>
          <p className="form-subtitle">Share the latest tech breakthroughs with the world.</p>
          <form className="static-form" onSubmit={this.handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="title">Post Title</label>
              <input type="text" id="title" placeholder="Enter a catchy title..." value={this.state.title} onChange={this.handleFormChange}/>
            </div>

            <div className="input-group">
              <label htmlFor="category">Category</label>
              <select id="category" value={this.state.category} onChange={this.handleFormChange}>
                <option value="AI">Artificial Intelligence</option>
                <option value="Startups">Startups</option>
                <option value="Security">Cybersecurity</option>
                <option value="Reviews">Product Reviews</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="image">Image URL</label>
              <input type="url" id="image" placeholder="https://example.com/image.jpg" value={this.state.image} onChange={this.handleFormChange}/>
            </div>

            <div className="input-group">
              <label htmlFor="time">Read Time</label>
              <input type="text" id="time" placeholder="e.g. 5m read time" value={this.state.time} onChange={this.handleFormChange}/>
            </div>

            <div className="input-group">
              <label htmlFor="tags">Tags (comma separated)</label>
              <input type="text" id="tags" placeholder="e.g. AI, Tech, Future" value={this.state.tags} onChange={this.handleFormChange}/>
            </div>

            <button type="submit" className="submit-btn">Publish Post</button>
          </form>
        </div>
      </section>
    );
  }
}

export default PostForm;
