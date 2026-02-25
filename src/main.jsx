import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MovieProvider } from "./context/MovieContext";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MovieProvider>,
);
