import React, {Component} from 'react';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Home from './home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <Home/>
        </div>
      </MuiThemeProvider>
      
    );
  }
}
