import React, { Component } from 'react';
import MapDashboard from './Component'

/** Provider is a react-redux component **/ 
import { Provider } from 'react-redux';
import Store from './Store/Store';
import './App.css'; 

class App extends Component {
  render() {
    return (
      /** store holds the whole state of your application**/ 
      <Provider store={Store}>
        <MapDashboard />
      </Provider>
    );
  }
}

export default App;
