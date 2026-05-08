# ⚡ Harry Potter Task Manager

![Angular](https://img.shields.io/badge/Angular-DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON--Server-333333.svg?style=for-the-badge&logo=json&logoColor=white)
![Vitest](https://img.shields.io/badge/vitest-%23646CFF.svg?style=for-the-badge&logo=vitest&logoColor=white)

A magical task management application built with Angular 21. Manage your tasks, spells, and duties with a Harry Potter-themed twist! This application uses a mock REST API provided by JSON Server to simulate backend operations.

## ✨ Key Features

- **Modern Angular Architecture**: Built with Angular 21 utilizing the latest framework features.
- **Mock Backend Integration**: Uses `json-server` to mock a fully functional REST API for fetching, creating, updating, and deleting tasks.
- **Responsive UI**: Clean and intuitive user interface designed for managing daily tasks seamlessly.
- **Fast Testing**: Configured with `Vitest` and `jsdom` for blazing fast unit testing.

## 🛠️ Technology Stack

| Category | Technology |
| --- | --- |
| **Framework** | Angular 21 |
| **Language** | TypeScript |
| **Mock Backend** | JSON Server |
| **Testing** | Vitest + JSDOM |
| **Formatting** | Prettier |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd harryPotter-taskManager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To run the application locally, you need to start both the mock backend and the Angular development server.

1. **Start the Mock Server:**
   Open a terminal and run:
   ```bash
   npm run server
   ```
   *This will start JSON Server on `http://localhost:3000` watching `db.json`.*

2. **Start the Angular App:**
   Open a new terminal and run:
   ```bash
   npm start
   ```
   *Navigate to `http://localhost:4200/` in your browser.*

## 📝 Available Scripts

- `npm start` / `ng serve`: Starts the Angular development server.
- `npm run server`: Starts the JSON Server mock backend.
- `npm run build`: Compiles the application into an output directory (`dist/`).
- `npm test`: Runs unit tests using Vitest.
- `npm run watch`: Builds the application in watch mode for development.

## 🧪 Testing

This project is configured to use [Vitest](https://vitest.dev/) for unit testing. To execute the tests, run:

```bash
npm test
```

## 🪄 Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---
*Made with ⚡ by the Development Team*
