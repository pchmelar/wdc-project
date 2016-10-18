import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';

const styles = {
  map: {
    height: 'calc(100% + 20px)',
    margin: '-20px 0 0 0'
  }
};

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    // setup Google Maps API
    GoogleMapsLoader.KEY = 'AIzaSyDHRSSM9cBkg4-tkLITA794XWTOUJHM2sw';
    GoogleMapsLoader.LIBRARIES = ['places'];
    GoogleMapsLoader.load((g) => {
      const map = new g.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 3
      });
      this.setState({ map: map });
    });
  }

  render() {
    return (
      <div id="map" style={styles.map}></div>
    );
  }
}

export default Map;
