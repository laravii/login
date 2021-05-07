import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './contexts/Auth'
import { GlobalStyles } from './styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
