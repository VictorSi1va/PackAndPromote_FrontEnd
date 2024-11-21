import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Componente principal
import './index.css'; // Estilos globais

// Cria a raiz para renderizar o aplicativo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Ativa verificações adicionais para detectar problemas */}
    <App /> {/* Renderiza o componente principal */}
  </React.StrictMode>
);
