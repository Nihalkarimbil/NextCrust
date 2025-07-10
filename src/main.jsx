import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartContext>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
      </CartContext>
    </BrowserRouter>
  </StrictMode>,
)
