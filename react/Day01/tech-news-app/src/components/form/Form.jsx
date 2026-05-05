import { useCallback, useState } from "react";
import "./Form.css";

/**
 * PostForm Component
 * A form to create new news posts.
 * Uses local state for form inputs and useCallback for submission handling.
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.onAddPost - Callback to add a new post to the global state.
 */
const PostForm = ({ onAddPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "AI",
    image: "",
    excerpt: ""
  });

  /**
   * Updates local form state on input change.
   */
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  /**
   * Handles form submission.
   * Uses useCallback to memoize the function.
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.title || !formData.excerpt) {
      alert("Please fill in the title and excerpt.");
      return;
    }

    // Call the parent handler
    onAddPost({
      ...formData,
      date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD
    });

    // Reset form
    setFormData({
      title: "",
      category: "AI",
      image: "",
      excerpt: ""
    });
  }, [formData, onAddPost]);

  return (
    <section className="form-container">
      <div className="form-card">
        <h2 className="form-title">Create New Post</h2>
        <p className="form-subtitle">Share the latest tech breakthroughs with the world.</p>
        
        <form className="static-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Post Title</label>
            <input 
              type="text" 
              id="title" 
              placeholder="Enter a catchy title..." 
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category</label>
            <select id="category" value={formData.category} onChange={handleChange}>
              <option value="AI">Artificial Intelligence</option>
              <option value="Startups">Startups</option>
              <option value="Security">Cybersecurity</option>
              <option value="Reviews">Product Reviews</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="image">Image URL</label>
            <input 
              type="url" 
              id="image" 
              placeholder="https://example.com/image.jpg" 
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="excerpt">Excerpt</label>
            <textarea 
              id="excerpt" 
              rows="3" 
              placeholder="Brief summary of the news..."
              value={formData.excerpt}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Publish Post</button>
        </form>
      </div>
    </section>
  );
};

export default PostForm;
