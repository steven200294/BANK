import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ROOT from './ROOT'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ROOT />
  </StrictMode>,
)
