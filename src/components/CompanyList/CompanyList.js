import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyCell from './CompanyCell'

import './CompanyList.scss'
class CompanyList extends Component {
  state = {
    searchQuery: ''
  }

  onSearchChange(event) {
    console.log(event);
    this.setState({
      searchQuery: event.target.value
    });
  }

  getFilteredCompanies() {
    const regex = new RegExp(this.state.searchQuery, "gi");
    return this.props.companies
      .filter(x => regex.test(x.name))
      .map((company, i) => <CompanyCell key={i} company={company} />)
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <form action="">
          <input
            className="search-input"
            type="search"
            value={this.state.searchQuery}
            onChange={this.onSearchChange.bind(this)}
            placeholder="Search for a company..."
          />
        </form>
        <ul className="company-list">
          {this.getFilteredCompanies()}
        </ul>
      </div>
    )
  }
}

const mapState = ({companies}) => {
  return {companies}
}

const mapDispatch = (dispatch) => {
  return {};
}

export default connect(mapState, mapDispatch)(CompanyList)
