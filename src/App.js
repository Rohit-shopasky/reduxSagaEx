import React from 'react';
import './App.css';
import Index from './pages'
import {Provider} from 'react-redux';
import configureStore from './store/index'
const store = configureStore(); 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Index />
      </Provider>
    </div>
  );
}

export default App;
