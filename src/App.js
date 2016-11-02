import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import Map from './components/CompanyMap/Map';

import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="content">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
