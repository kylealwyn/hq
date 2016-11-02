import React, { Component } from 'react';
import CompanyList from '../CompanyList/CompanyList';

import './Sidebar.scss';
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="app-title">Headquarters</h1>
        <CompanyList />
      </div>
    );
  }
}

export default Sidebar;
