import React from 'react'
import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
