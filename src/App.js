import React from 'react';
import {GlobalStyle} from './style'
import Header from './header'
function App() {
  return (
 <React.Fragment>
    <GlobalStyle  />
    <div style= {{ color:'red',backgroud:"blue",}}> 我们是 </div>
  
    {/* <Header /> */}
  </React.Fragment>
  );
}

export default App;
