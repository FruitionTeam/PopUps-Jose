import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
