import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import * as serviceWorker from './serviceWorker';

const mountNode = document.getElementById('root');
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  mountNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
