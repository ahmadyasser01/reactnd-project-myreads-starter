import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const site = <BrowserRouter>
    <App />
</BrowserRouter>

ReactDOM.render(site, document.getElementById('root'))
