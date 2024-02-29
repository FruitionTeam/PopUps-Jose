import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/layout/footer/Footer";
import Login from "./components/account/Login";
import Signup from "./components/account/Signup";
import RestSignup from "./components/account/RestSignup";
import CustSignup from "./components/account/CustSignup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route
            path="/finish-restaurant-account"
            exact
            element={<RestSignup />}
          />
          <Route
            path="/finish-customer-account"
            exact
            element={<CustSignup />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
