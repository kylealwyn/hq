import React, {Component, PropTypes} from 'react';

class CompanyCell extends Component {
  static propTypes = {
    company: PropTypes.object
  }

  render() {
    const {company} = this.props;

    return (
      <li className="company-cell">
        <div className="company-cell-header row align-center-xs collapsed-xs">
          <img className="company-cell-image" src={company.logo} alt={`${company.name} logo`} />
          <h3 className="company-cell-name">{company.name}</h3>
        </div>

        <p className="company-cell-description">{company.description}</p>
        {/* <p className="company-cell-address">
          <small> <i className="ion-location"></i> {{address.street}}, {{address.city}}, {{address.state}} {{address.zip}}</small>
        </p> */}

        <div className="company-cell-icons row collapsed-xs">
          <div>
            <a className="company-cell-site" href={company.website} name={`${company.name} website`} target="_blank">
              <i className="ion-ios-world-outline"></i>
            </a>
          </div>
          <span className="col-xs"></span>
          <div>
            <i className="ion-ios-location"></i>
          </div>
        </div>

      </li>
    )
  }
}

export default CompanyCell
