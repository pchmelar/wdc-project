import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import axios from 'axios';

const styles = {
  map: {
    height: '100%',
  }
};

class Map extends Component {

  componentDidMount() {
    // get posts from API
    axios.get(`https://fierce-ridge-28571.herokuapp.com/blog/${this.props.params.blogId}/post`)
      .then((res) => {

        // setup Google Maps API
        GoogleMapsLoader.KEY = 'AIzaSyDHRSSM9cBkg4-tkLITA794XWTOUJHM2sw';
        GoogleMapsLoader.LIBRARIES = ['places'];
        GoogleMapsLoader.load((google) => {
          // display the map
          const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 },
            zoom: 3
          });

          // add markers to the map
          for (const post of res.data) {
            new google.maps.Marker({
              position: {
                lat: post.location.lat,
                lng: post.location.lng
              },
              map: map
            });
          }

          // recenter the map to the first post
          if (res.data.length > 0) {
            map.setCenter({
              lat: res.data[0].location.lat,
              lng: res.data[0].location.lng
            })
          }
          
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="map" style={styles.map}></div>
    );
  }
}

export default Map;
