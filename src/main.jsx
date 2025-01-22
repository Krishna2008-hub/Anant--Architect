import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './assets/Components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </>
)
