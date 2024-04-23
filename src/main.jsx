import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MessageProvider } from './provider/MessageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </React.StrictMode>,
)
