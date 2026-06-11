export default function SignUp({ onClose = () => {} }) {
  return (
    <div className="signup-card">
      <div className="signup-header">
        <button
          onClick={onClose}
          type="button"
          className="signup-close-btn"
          aria-label="Close form"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-2 mb-2">
          <svg className="h-6 w-auto text-sky-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 10V19H13V13H11V19H5V10L12 5L19 10ZM12 3L3 9V21H21V9L12 3Z" />
          </svg>
          <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
            Work<span className="text-sky-500">cation</span>
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create your account</h2>
        <p className="text-sm text-gray-550 dark:text-gray-400 mt-1">Start booking your perfect work-friendly escapes today.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="form-input"
          />
        </div>

        <div className="checkbox-container">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            className="checkbox-input"
          />
          <label htmlFor="agree" className="checkbox-label">
            I agree to the{' '}
            <a href="#" className="text-sky-500 hover:underline font-semibold">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-sky-500 hover:underline font-semibold">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="btn-submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}