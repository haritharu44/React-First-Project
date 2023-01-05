import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import './sass/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
