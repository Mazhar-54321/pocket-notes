import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainContainenr from './MainContainenr.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContainenr />
  </StrictMode>,
)
