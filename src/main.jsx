import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import { store } from './redux/store.js'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserProvider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <UserProvider>
      {/* <Provider store={store}> */}
        <App/>
      {/* </Provider> */}
      </UserProvider>
    </StrictMode>
  </BrowserRouter>
)
