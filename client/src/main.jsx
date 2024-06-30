import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from  "react-router-dom"
import { Provider } from 'react-redux'
import {store} from './redux/app/store.js'
import TmaProvider from "./components/tma/provider.jsx";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <TmaProvider>
      <App/>
      </TmaProvider>
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
