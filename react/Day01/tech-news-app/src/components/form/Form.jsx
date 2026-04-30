import "./Form.css";

const PostForm = () => {
  return (
    <section className="form-container">
      <div className="form-card">
        <h2 className="form-title">Create New Post</h2>
        <p className="form-subtitle">Share the latest tech breakthroughs with the world.</p>
        
        <form className="static-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="title">Post Title</label>
            <input type="text" id="title" placeholder="Enter a catchy title..." />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category</label>
            <select id="category">
              <option value="AI">Artificial Intelligence</option>
              <option value="Startups">Startups</option>
              <option value="Security">Cybersecurity</option>
              <option value="Reviews">Product Reviews</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="image">Image URL</label>
            <input type="url" id="image" placeholder="https://example.com/image.jpg" />
          </div>

          <div className="input-group">
            <label htmlFor="excerpt">Excerpt</label>
            <textarea id="excerpt" rows="3" placeholder="Brief summary of the news..."></textarea>
          </div>

          <button type="submit" className="submit-btn">Publish Post</button>
        </form>
      </div>
    </section>
  );
};

export default PostForm;
