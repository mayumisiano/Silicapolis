import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Estaticos/Navbar/Navbar'
import Footer from './Components/Estaticos/Footer/Footer'
import {Grid} from '@material-ui/core';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import logo from './logo.svg';
import './App.css';
import CadastroUsuario from './Pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './Components/Temas/ListaTema/ListaTema';
import ListaPostagem from './Components/Postagens/ListaPostagem/ListaPostagem';

function App() {
  return (      
    <Router>
    <Navbar />
    <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/cadastrousuario" element={<CadastroUsuario />} />

      <Route path="/login" element={<Login />} />
      
      <Route path="/temas" element={<ListaTema />} />
      
      <Route path="/posts" element={<ListaPostagem/>} />

    </Routes>
    <Footer />
  </Router>   
       
  );
}

export default App;
