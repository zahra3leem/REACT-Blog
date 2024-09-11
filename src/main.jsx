import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</StrictMode>
  
)
 