import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginComponent } from './components/LoginComponent.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginComponent />
  </StrictMode>,
)
