import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';

const styles = {
  map: {
    height: '100%',
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
    GoogleMapsLoader.load((google) => {
      // display the map
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 3
      });
      this.updateMarkers(this.props.data.posts, map);
      this.setState({ map: map });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.data.posts, this.state.map);
  }

  updateMarkers = (posts, map) => {
    GoogleMapsLoader.load((google) => {
      // add markers to the map
      for (const post of posts) {
        new google.maps.Marker({
          position: {
            lat: post.location.lat,
            lng: post.location.lng
          },
          map: map
        });
      }
      // recenter the map to the first post
      if (posts.length > 0) {
        map.setCenter({
          lat: posts[0].location.lat,
          lng: posts[0].location.lng
        })
      }
    });
  };

  render() {
    return (
      <div id="map" style={styles.map}></div>
    );
  }
}

Map.propTypes = {
  data: React.PropTypes.shape({
    posts: React.PropTypes.array.isRequired
  })
}

export default Map;
