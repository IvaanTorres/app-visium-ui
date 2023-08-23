import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import'./index.css'
import './config/i18n/i18n.ts'
import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
