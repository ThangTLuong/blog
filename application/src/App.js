import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import ProtectedRoute from "./services/protectedRoute";

import Home from "./pages/home";
import Register from "./pages/registration";
import Login from "./pages/login";
import Upload from "./pages/upload";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<rotectedRoute element={Upload} />} /> 
        <Route path="/profile/:username" element={<rotectedRoute element={Profile} />} />
        <Route path="/logout" element={<ProtectedRoute element={Home} />} />
      </Routes>
    </Router>
  );
}

export default App;