import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './MiRouter.jsx'
import { Provider } from 'react-redux'
import store from './store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
