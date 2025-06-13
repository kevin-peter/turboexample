import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App as SharedApp } from "@repo/ui";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedApp />
  </StrictMode>
)
