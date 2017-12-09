import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {BrowserRouter} from 'react-router-dom'

// Needed by material-ui
injectTapEventPlugin();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
