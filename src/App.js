import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </Router>
  );
};

export default App;
