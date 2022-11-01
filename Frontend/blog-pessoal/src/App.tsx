import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Estaticos/Navbar/Navbar'
import Footer from './Components/Estaticos/Footer/Footer'
import {Grid} from '@material-ui/core';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import logo from './logo.svg';
import './App.css';

function App() {
  return (      
    <Router>
    <Navbar />
    <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

    </Routes>
    <Footer />
  </Router>   
       
  );
}

export default App;
