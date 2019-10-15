import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter } from 'react-router-dom'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
