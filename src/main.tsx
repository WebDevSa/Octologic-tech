import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "../tailwind.config.js";
import Application from './components/Application.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Application/>
  </React.StrictMode>,
)
