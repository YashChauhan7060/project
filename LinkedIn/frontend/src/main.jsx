import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext.jsx'
import userContext from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
  <userContext>
    <App />
  </userContext>
  </AuthContext>
  </BrowserRouter>  
)
