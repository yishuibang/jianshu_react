import React from 'react';
import {GlobalStyle} from './style'
import IconGlobalStyle from './iconfont/iconfont'
import Header from './header'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store = {store}>
      <React.Fragment>
        <GlobalStyle  />
        <IconGlobalStyle />
        <Header />

      
      </React.Fragment>
  </Provider>
  );
}

export default App;
