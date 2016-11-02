import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyCell from './CompanyCell'

import './CompanyList.scss'
class CompanyList extends Component {
  render () {
    console.log(this.props);
    const cells = this.props.companies.map((company, i) => <CompanyCell key={i} company={company} />)
    return (
      <ul className="company-list">
        {cells}
      </ul>
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
