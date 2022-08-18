import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStyle = createGlobalStyle`
  html {
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    font-family: 'Nunito', sans-serif;

    * {
      scrollbar-width: auto;
      scrollbar-color: #caa1d6 #58465e;

    }

    /* Chrome, Edge, and Safari */

    *::-webkit-scrollbar {
      width: 10px;
    }

    *::-webkit-scrollbar-track {
      background: #58465e;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #caa1d6;
      border-radius: 10px;
      border: 0px none #ffffff;
    }
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;

  }

  *, * ::before, *::after {
    box-sizing: border-box;
  }
`;
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
