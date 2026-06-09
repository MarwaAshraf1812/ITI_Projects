# ☕ Milton's Choco Coffee — Ice Coffee App

A premium, interactive coffee customization and ordering web application built using **React** and **Material-UI (MUI)**. The project features a modern, responsive user interface allowing users to explore premium coffee varieties, select and customize chocolate ingredients (White, Milk, and Dark Chocolate) with real-time showcases, adjust order quantities, and add items to their cart.

---

## ✨ Key Features

- **Dynamic Ingredient Customization**: Interactive customization panel that lets users switch between *White*, *Milk*, and *Dark* chocolate toppings, dynamically updating descriptions, ratings, and visuals.
- **Product Catalog**: Explore a curated collection of premium coffee varieties (Hot Milk Chocolate, Cold Milk Chocolate, and Dark Chocolate) with interactive badges, prices, and ratings.
- **Interactive UI Components**: Custom-designed elements including:
  - `QuantitySelector`: Dynamic count adjusters for orders.
  - `ProductCard` & `FeatureCard`: Highly polished, responsive card displays.
  - `CustomizeShowcase`: Interactive options selector with smooth state transitions.
- **Modern & Responsive Layout**: Clean structural sections (`Navbar`, `Hero`, `CustomizeSection`, `About`, `Product`, `Contact`, `Footer`) fully optimized for all screen sizes (mobile, tablet, and desktop).

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **UI Library**: [Material-UI (MUI v9)](https://mui.com/)
- **Styling Engine**: [Emotion](https://emotion.sh/) (`@emotion/react`, `@emotion/styled`)
- **Icons**: [@mui/icons-material](https://mui.com/material-ui/material-icons/)
- **Build Tool**: [Vite](https://vite.dev/) (Fast Hot Module Replacement)

---

## 📂 Project Structure

```bash
IceCoffeeApp/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Coffee & ingredient images/illustrations
│   ├── components/
│   │   ├── UI/             # Reusable UI atoms (Buttons, Selectors, Cards)
│   │   │   ├── CustomButton.jsx
│   │   │   ├── CustomizeShowcase.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── OrderMenu.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── QuantitySelector.jsx
│   │   │   └── SectionHeader.jsx
│   │   ├── sections/       # Layout sections
│   │   │   ├── CustomizeSection.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── about.jsx
│   │   │   ├── contact.jsx
│   │   │   └── home.jsx
│   │   └── shared/         # Shared layouts
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   ├── utils/              # Helper functions/theme styles
│   ├── App.css
│   ├── App.jsx             # Root application component
│   ├── index.css           # Global typography and base styles
│   └── main.jsx            # React entrypoint
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16.x or newer) installed on your system.

### 🔧 Installation

1. Navigate to the project directory:
   ```bash
   cd Angular/harryPotter-taskManager/../..  # Or directly:
   cd MUI/D02/IceCoffeeApp
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### 💻 Running Development Server

To launch the project locally with hot-reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL displayed in your terminal).

### 🏗️ Production Build

To build the project for production deployment:
```bash
npm run build
```
This generates a production-ready `dist` folder containing optimized HTML, CSS, and JS assets.
