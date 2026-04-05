import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initFbPixel } from './utils/fb-pixel-lazy'

// Inicializa o Pixel do Facebook após o LCP
initFbPixel();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
