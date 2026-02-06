import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- IMPORTANTE: Agrega esto
import App from './App.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- Envolvemos la App aquí */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)