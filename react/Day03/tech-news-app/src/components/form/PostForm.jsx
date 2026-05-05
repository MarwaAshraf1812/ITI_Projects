import { useReducer, useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import './Form.css';

// ─────────────────────────────────────────────
// Reducer — يتحكم في بيانات الـ form
// ─────────────────────────────────────────────
const initialFormState = {
  title: '',
  category: 'AI',
  image: '',
  time: '',
  tags: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      // نغير أي field بـ اسمه ديناميكياً
      return { ...state, [action.field]: action.value };

    case 'RESET':
      return initialFormState;

    default:
      return state;
  }
}

// ─────────────────────────────────────────────
// PostForm Component
// ─────────────────────────────────────────────
function PostForm({ isOpen, onClose, addPost }) {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  // useCallback — مش هيتعمل من جديد إلا لو dispatch اتغير
  const handleFormChange = useCallback((e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });
  }, []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form Data:', formState);
    addPost(formState);
    onClose();
    dispatch({ type: 'RESET' });
  }, [formState, addPost, onClose]);

  return (
    <section className={`form-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className="overlay-bg" onClick={onClose}></div>
      <div className="form-card sidebar-drawer">
        <button className="close-btn" onClick={onClose}>
          <FiX size={24} />
        </button>

        <h2 className="form-title">Create New Post</h2>
        <p className="form-subtitle">Share the latest tech breakthroughs with the world.</p>
        <form className="static-form" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter a catchy title..."
              value={formState.title}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category</label>
            <select id="category" value={formState.category} onChange={handleFormChange}>
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
              value={formState.image}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="time">Read Time</label>
            <input
              type="text"
              id="time"
              placeholder="e.g. 5m read time"
              value={formState.time}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="tags">Tags (comma separated)</label>
            <input
              type="text"
              id="tags"
              placeholder="e.g. AI, Tech, Future"
              value={formState.tags}
              onChange={handleFormChange}
            />
          </div>

          <button type="submit" className="submit-btn">Publish Post</button>
        </form>
      </div>
    </section>
  );
}

export default PostForm;
