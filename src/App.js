import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
