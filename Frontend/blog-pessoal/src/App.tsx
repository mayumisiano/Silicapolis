import React from 'react';
import Navbar from './Components/Estaticos/Navbar/Navbar'
import Footer from './Components/Estaticos/Footer/Footer'
import {Grid} from '@material-ui/core';
import Home from './Pages/Home/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (      
    <>
      <Navbar />
        <Home />
        <Footer />       
      
    </>          
  );
}

export default App;
