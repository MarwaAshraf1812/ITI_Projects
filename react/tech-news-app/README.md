# 🌐 Tech News App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A.svg?style=for-the-badge&logo=i18next&logoColor=white)

A modern, full-featured React application for reading, creating, and exploring technology news. Built with React 19, Vite, and Redux Toolkit, this project features an elegant UI with seamless localization (RTL/LTR) and dynamic theming.

## ✨ Key Features

- **Modern Architecture**: Developed using React 19 functional components and custom hooks.
- **Robust State Management**: Centralized state using Redux Toolkit (`authSlice`, `newsSlice`, `themeSlice`).
- **Routing & Protection**: Client-side routing with `react-router-dom`, including protected routes for authenticated actions.
- **Complete Authentication**: Full Login and Signup flows with form validation and user state persistence.
- **🌐 Multi-Language Support (i18n)**: Fully integrated `i18next` providing dynamic switching between English (LTR) and Arabic (RTL).
- **🌗 Dynamic Theming**: Easily switch between Dark and Light modes.
- **Interactive UI**: 
  - Responsive Navbar and Footer.
  - Engaging Hero Carousel.
  - Beautifully designed News Cards.
  - Toast notifications for immediate user feedback using `react-hot-toast`.
- **API Integration**: Asynchronous data fetching and posting using `axios`.

## 🛠️ Technology Stack

| Category | Technology |
| --- | --- |
| **Framework** | React 19 + Vite |
| **State Management** | Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) |
| **Routing** | React Router DOM (`react-router-dom`) |
| **Styling** | Custom Vanilla CSS with Theme Variables |
| **Internationalization** | `i18next`, `react-i18next` |
| **HTTP Client** | Axios |
| **Notifications** | `react-hot-toast` |
| **Icons** | `react-icons` |

## 📂 Project Structure

```text
src/
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components
│   ├── Hero/       # Carousel and Hero section
│   ├── card/       # Individual news article cards
│   ├── cardList/   # Grid/List wrapper for cards
│   ├── footer/     # Global footer
│   ├── form/       # Reusable form components
│   └── navbar/     # Global navigation bar
├── i18n/           # Internationalization configuration and translations
├── pages/          # Main application views
│   ├── HomePage    # Main landing page
│   ├── ArticlePage # Detailed view for a single post
│   ├── CreatePostPage # Protected page for new submissions
│   ├── LoginPage   # User authentication
│   └── SignupPage  # User registration
├── store/          # Redux store configuration and slices
│   └── slices/     # authSlice, newsSlice, themeSlice
├── App.jsx         # Main layout, routes, and global providers
└── main.jsx        # Application entry point
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tech-news-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Navigate to `http://localhost:5173` in your browser.

## 📝 Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the application for production to the `dist` folder.
- `npm run preview`: Bootstraps a local web server that serves the production build for testing.
- `npm run lint`: Runs ESLint to check for code quality and errors.

## 🎨 Design & Styling

The application relies on CSS variables for its design system, allowing for smooth transitions between themes. It avoids generic colors and embraces modern design principles like glassmorphism, subtle micro-animations, and responsive layouts to ensure a premium user experience across all devices.

---
*Made with ❤️ by the Development Team*
