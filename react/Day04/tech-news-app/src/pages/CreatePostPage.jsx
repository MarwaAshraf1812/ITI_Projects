import { useReducer, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNewsContext } from '../context/NewsContext.jsx';
import './CreatePostPage.css';

const initialFormState = {
  title: '',
  category: 'AI',
  image: '',
  time: '',
  tags: '',
  content: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialFormState;
    default:
      return state;
  }
}

function CreatePostPage() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const { addPost } = useNewsContext();
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!formState.title.trim()) {
      toast.error('Post title is required.');
      return;
    }
    if (!formState.content.trim()) {
      toast.error('Article content cannot be empty.');
      return;
    }

    toast.promise(
      new Promise((resolve) => {
        addPost(formState);
        dispatch({ type: 'RESET' });
        resolve();
      }),
      {
        loading: 'Publishing post...',
        success: '🚀 Post published successfully!',
        error: 'Failed to publish. Please try again.',
      }
    );

    navigate('/');
  }, [formState, addPost, navigate]);

  return (
    <div className="create-page">
      <div className="create-container">

        <div className="create-header">
          <h1 className="create-title">Create New Post</h1>
          <p className="create-subtitle">Share the latest tech breakthroughs with the world.</p>
        </div>

        <form className="create-form" onSubmit={handleSubmit}>
          <div className="create-form-grid">
            <div className="form-col">
              <div className="input-group">
                <label htmlFor="title">Post Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter a catchy title..."
                  value={formState.title}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="category">Category</label>
                <select id="category" value={formState.category} onChange={handleChange}>
                  <option value="AI">Artificial Intelligence</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Software">Software</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Security">Cybersecurity</option>
                  <option value="Business">Business</option>
                  <option value="Gadgets">Gadgets</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="image">Image URL</label>
                <input
                  type="url"
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  value={formState.image}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="time">Read Time</label>
                <input
                  type="text"
                  id="time"
                  placeholder="e.g. 5m read time"
                  value={formState.time}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="tags">Tags (comma separated)</label>
                <input
                  type="text"
                  id="tags"
                  placeholder="e.g. AI, Tech, Future"
                  value={formState.tags}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-col">
              <div className="input-group content-group">
                <label htmlFor="content">Article Content</label>
                <textarea
                  id="content"
                  placeholder="Write your full article here..."
                  value={formState.content}
                  onChange={handleChange}
                  rows={16}
                />
              </div>
            </div>

          </div>

          <div className="create-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                toast('Draft discarded.', { icon: '🗑️' });
                navigate('/');
              }}
            >
              Cancel
            </button>
            <button type="submit" className="submit-btn">Publish Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostPage;
