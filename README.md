<div align="center">
  <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" alt="Travel Banner" width="100%" height="300" style="object-fit: cover; border-radius: 10px;" />
  
  <br />
  <br />

  <h1>🌍 Travel Website Assignment</h1>
  <p>
    <strong>A stunning, responsive, and modern React application designed for discovering your next travel destination.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8-purple?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Status-Deployment%20Ready-success?style=for-the-badge" alt="Status" />
  </p>
</div>

<hr />

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technologies Used](#-technologies-used)
- [Deployment Guide](#-deployment-guide)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About the Project

This **Travel Website Assignment** is a beautifully crafted single-page application (SPA) built using React. It serves as a comprehensive demonstration of modern web development techniques, featuring seamless client-side routing, modular component architecture, and an optimal developer experience powered by Vite.

---

## ✨ Key Features

- **Blazing Fast Performance**: Powered by Vite for instantaneous hot module replacement (HMR) and optimized production builds.
- **Client-Side Routing**: Implemented using `React Router` (specifically `HashRouter`) to ensure smooth and error-free navigation on static hosting environments like GitHub Pages.
- **Component-Based Architecture**: Highly modular, reusable, and maintainable codebase.
- **Responsive Design**: Designed to work flawlessly across all devices, from mobile phones to large desktop screens.

---

## 🛠️ Technologies Used

| Technology | Description |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core library for building dynamic user interfaces. |
| **[Vite 8](https://vitejs.dev/)** | Next-generation frontend tooling for rapid development. |
| **[React Router 7](https://reactrouter.com/)** | Declarative routing for single-page applications. |
| **[ESLint](https://eslint.org/)** | Pluggable linting utility to enforce code quality. |

---

## 🚀 Deployment Guide

**Yes, you can absolutely deploy this on GitHub Pages completely for free!** No external paid service is required. 

This repository has been expertly configured with a **GitHub Actions CI/CD Workflow**. This means every time you push to the `main` branch, your website will automatically build and deploy!

### Steps to enable GitHub Pages:
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. On the left sidebar, click on **Pages**.
4. Under the **Build and deployment** section, change the **Source** dropdown to **GitHub Actions**.
5. That's it! GitHub Actions will now automatically handle your deployments. Once the action finishes, your site will be live at `https://zainmustafam977.github.io/travel-website-assignment/`.

---

## 💻 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Ensure you have Node.js installed (v18 or higher recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zainmustafam977/travel-website-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd travel-website-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

To start the local development server:
```bash
npm run dev
```

Your app will be running at `http://localhost:5173`.

---

## 📁 Project Structure

```text
travel-website-assignment/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline for GitHub Pages
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable React components
│   ├── pages/              # Route-level components (Home, About)
│   ├── App.jsx             # Root component and router config
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <p>Built with ❤️ using React & Vite</p>
</div>
