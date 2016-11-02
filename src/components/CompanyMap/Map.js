import {
  default as React,
  Component,
  PropTypes
} from "react";

import {
  connect
} from 'react-redux';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import MarkerClusterer from "react-google-maps/lib/addons/MarkerClusterer";

const MarkerClusterMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker, i) => {
        const ICON_SIZE = 32;
        const icon = {
          url: marker.logo,
          anchor: { x: ICON_SIZE/2, y: ICON_SIZE/2 },
          // origin: {
          //   x: 10,
          //   y: 10
          // },
          scaledSize: {
            width: ICON_SIZE,
            height: ICON_SIZE
          }
        }
        return (
          <Marker
            icon={icon}
            position={{ lat: marker.address.lat, lng: marker.address.lng }}
            key={i}
          />
        )
      })}
    </MarkerClusterer>
  </GoogleMap>
));

class MarkerClustererExample extends Component {
  propTypes: {
    markers: PropTypes.array
  }

  defaultProps = {
    markers: [],
  }

  render() {
    return (
      <MarkerClusterMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        markers={this.props.companies}
      />
    );
  }
}

const mapState = ({companies}) => {
  return {
    companies
  }
}

const mapDispatch = () => {
  return {}
}

export default connect(mapState, mapDispatch)(MarkerClustererExample)
