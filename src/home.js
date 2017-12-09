import React, { Component } from 'react'
import {Tabs,Tab} from 'material-ui/Tabs'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Display from './display'
import Calender from './calender'
import Main from './main'
import './style/App.css'
import {BrowserRouter,Router} from 'react-router-dom'

class Home extends Component {

   constructor(props){
     super(props);
     this.state={}
   }
  render() {
    return (
      <div className="header">
        <div className="container">
        <header >TongHua Art School</header>
        </div>
        <Tabs >
          <Tab label="Home" >
          <Main className="tab"/>
          </Tab>
          <Tab label="Display" >
           <div>
           <Display/>
           </div>
          </Tab>
          <Tab label="Calender">
            <Calender/>
          </Tab>
        </Tabs>
      </div>
    );
  }

   static childContextTypes = {
    muiTheme: React.PropTypes
  }
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    }
  }
}

export default Home;

