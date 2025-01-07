// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.css'; // Importa o CSS global

// Renderiza a aplicação no elemento com id "root"
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
