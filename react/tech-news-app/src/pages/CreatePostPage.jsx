import { useReducer, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/slices/newsSlice';

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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    formDispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!formState.title.trim()) {
      toast.error(t('createPost.toasts.titleRequired'));
      return;
    }
    if (!formState.content.trim()) {
      toast.error(t('createPost.toasts.contentRequired'));
      return;
    }

    toast.promise(
      new Promise((resolve) => {
        dispatch(addPost(formState));
        formDispatch({ type: 'RESET' });
        resolve();
      }),
      {
        loading: t('createPost.toasts.publishing'),
        success: t('createPost.toasts.success'),
        error: t('createPost.toasts.error'),
      }
    );

    navigate('/');
  }, [formState, addPost, navigate, t]);

  return (
    <div className="create-page">
      <div className="create-container">

        <div className="create-header">
          <h1 className="create-title">{t('createPost.title')}</h1>
          <p className="create-subtitle">{t('createPost.subtitle')}</p>
        </div>

        <form className="create-form" onSubmit={handleSubmit}>
          <div className="create-form-grid">
            <div className="form-col">
              <div className="input-group">
                <label htmlFor="title">{t('createPost.postTitle')}</label>
                <input
                  type="text"
                  id="title"
                  placeholder={t('createPost.postTitlePlaceholder')}
                  value={formState.title}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="category">{t('createPost.category')}</label>
                <select id="category" value={formState.category} onChange={handleChange}>
                  <option value="AI">{t('createPost.categories.AI')}</option>
                  <option value="Hardware">{t('createPost.categories.Hardware')}</option>
                  <option value="Software">{t('createPost.categories.Software')}</option>
                  <option value="Mobile">{t('createPost.categories.Mobile')}</option>
                  <option value="Security">{t('createPost.categories.Security')}</option>
                  <option value="Business">{t('createPost.categories.Business')}</option>
                  <option value="Gadgets">{t('createPost.categories.Gadgets')}</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="image">{t('createPost.imageUrl')}</label>
                <input
                  type="url"
                  id="image"
                  placeholder={t('createPost.imageUrlPlaceholder')}
                  value={formState.image}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="time">{t('createPost.readTime')}</label>
                <input
                  type="text"
                  id="time"
                  placeholder={t('createPost.readTimePlaceholder')}
                  value={formState.time}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="tags">{t('createPost.tags')}</label>
                <input
                  type="text"
                  id="tags"
                  placeholder={t('createPost.tagsPlaceholder')}
                  value={formState.tags}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-col">
              <div className="input-group content-group">
                <label htmlFor="content">{t('createPost.content')}</label>
                <textarea
                  id="content"
                  placeholder={t('createPost.contentPlaceholder')}
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
                toast(t('createPost.toasts.draftDiscarded'), { icon: '🗑️' });
                navigate('/');
              }}
            >
              {t('createPost.cancel')}
            </button>
            <button type="submit" className="submit-btn">{t('createPost.publish')}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostPage;
