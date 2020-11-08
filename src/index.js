import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import ScrollToTop from './Components/ScrollToTop'

ReactDom.render(<BrowserRouter><ScrollToTop/><App/></BrowserRouter>, document.getElementById('root'))