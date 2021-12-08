import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//here the App component serves as the child prop of the ThemeProvider and is accessed as the child in ThemeContext.js