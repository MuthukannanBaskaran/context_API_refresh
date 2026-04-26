import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageContextProvider } from './context/LanguageContext';
import { UserContextProvider } from './context/UserContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LanguageContextProvider>
  </StrictMode>,
)
