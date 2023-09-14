import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorias from './page/Categorias';
import MinhaEstante from './page/MinhaEstante';
import Favoritos from './page/Favoritos';
import Header from './components/Header';

import image from './assets/images/logo.svg';

//Aplicando estilo global { createGlobalStyle }
const GloabalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li{
    list-style: none;
    cursor: pointer;
  }

`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GloabalStyle/>
    <BrowserRouter>
      <Header image={image} alt='imagem logo' firstTitle='Alura' secondTitle='Books'/>
      <Routes>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/minhaEstante' element={<MinhaEstante/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </BrowserRouter> 

  </React.StrictMode>
);

