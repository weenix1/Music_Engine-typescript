import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from "./components/NavBar/MyNavBar";
import HomePage from "./components/Home/HomPage";
import MyFooter from "./components/Footer/MyFooter";
import DetailPage from "./components/Detail/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar brand="Weenix-Music" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage /* song={song} */ />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
