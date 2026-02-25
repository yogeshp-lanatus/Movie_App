import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import "./App.css";
import { EditPage } from "./page/EditPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </>
  );
};
