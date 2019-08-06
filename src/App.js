import React from 'react';
import {GlobalStyle} from './style'
import IconGlobalStyle from './iconfont/iconfont'
import Header from './header'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
function App() {
  return (
    <Provider store = {store}>
      <React.Fragment>
        <GlobalStyle  />
        <IconGlobalStyle />
        <BrowserRouter>
           <div>
           <Header />
           <Route path = '/' exact component = {Home} ></Route>
           <Route path = '/detail' exact component = {Detail} ></Route>
           </div>
        </BrowserRouter>
      </React.Fragment>
  </Provider>
  );
}

export default App;
