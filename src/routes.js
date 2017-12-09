import React from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './App'
import Home from './home'
import Display from './display'

const Routes = (props) =>(
  <Router {...props} >
    <div>
    <Route path='/' component={App}/>
    <Route path ='/home' component={Home}/>
    <Route path='/display' component={Display}/>
    </div>
  </Router>
);

export default Routes;
