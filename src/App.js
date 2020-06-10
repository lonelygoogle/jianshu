import React from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header'
import './statics/iconfont/iconfont.css'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header/>
    </Provider>
  );
}

export default App;
