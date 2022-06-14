import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MoralisProvider } from "react-moralis"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <MoralisProvider serverUrl="https://8fisd1wmdlrt.usemoralis.com:2053/server" appId="n7Me6BopJMMyPxKTMjk25HXBVWOfrkeDPprYoXky">
      <App />
    </MoralisProvider>

  </React.StrictMode>
)
