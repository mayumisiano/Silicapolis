import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Estaticos/Navbar/Navbar'
import Footer from './Components/Estaticos/Footer/Footer'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import './App.css';
import CadastroUsuario from './Pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './Components/Temas/ListaTema/ListaTema';
import ListaPostagem from './Components/Postagens/ListaPostagem/ListaPostagem';
import CadastroPost from './Components/Postagens/CadastroPost/CadastroPost';
import CadastroTema from './Components/Temas/CadastroTema/CadastroTema';
import DeletarPostagem from './Components/Postagens/DeletarPostagem/DeletarPostagem';
import DeletarTema from './Components/Temas/DeletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './Store/Store';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (      
    <Provider store={store}>
      <ToastContainer />
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh'}}>
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        <Route path="/login" element={<Login />} />
        
        <Route path="/temas" element={<ListaTema />} />
        
        <Route path="/posts" element={<ListaPostagem/>} />

        <Route path="/formularioPostagem" element={<CadastroPost/>} />

        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

        <Route path="/formularioTema/:id" element={<CadastroTema />} />

        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

        <Route path="/deletarTema/:id" element={<DeletarTema />} />

      </Routes>
    </div>
    <Footer />
  </Router>   
  </Provider>
       
  );
}

export default App;
