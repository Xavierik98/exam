import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Contact from "../Pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}
export default App
