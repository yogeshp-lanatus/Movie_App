# 🎬 Movieapp

- **[🔴 Live Demo](https://movie-app-cinehub.netlify.app/)**

A modern, responsive movie library application built with **React** and **Vite**. This application allows users to browse a collection of movies, search for their favorites, view details, and even manage the movie dataset through an edit interface.

## ✨ Features

- **🎥 Movie Listing**: Browse a curated list of movies with their posters and details.
- **🔍 Smart Search**: Real-time search functionality to find movies by title.
- **🌓 Dark/Light Mode**: Toggle between dark and light themes for a comfortable viewing experience.
- **📄 Movie Details**: Click on any movie to view detailed information including cast, director, and plot summary in a modal.
- **✏️ Admin/Edit Interface**: A dedicated page (`/edit`) to manage movie data using a DataGrid.
  - Edit movie details (Name, Description, Cast, etc.)
  - Changes are persisted locally using **Local Storage**.
- **📱 Responsive Design**: Fully responsive UI built with **Material UI (MUI)**.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Component Library**: [Material UI (@mui/material)](https://mui.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Data Grid**: [MUI X Data Grid](https://mui.com/x/react-data-grid/)
- **State Management**: React Context API & Local Storage

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components (Navbar, Movie card, Modal, etc.)
├── context/         # React Context for global state (Theme, Search)
├── page/            # Page components (Home, EditPage)
├── UI/              # UI specific components
├── App.jsx          # Main application component with routing
├── main.jsx         # Entry point
└── Movies.js        # Initial dataset
```

## 📝 Usage

- **Home Page**: View the list of movies. Use the search bar in the navbar to filter movies. Click on a movie card to see more details. Toggle the theme using the sun/moon icon.
- **Edit Page**: Navigate to `/edit` to access the movie management grid. Double-click on cells to edit movie information. Changes are saved automatically to your browser's local storage.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
