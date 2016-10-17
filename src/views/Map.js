import React, { Component } from 'react';

const styles = {
  iframe: {
    // flex: 1,
    height: '100%',
    margin: '-20px 0 0 0',
    border: 'none'
  }
};

class Map extends Component {
  render() {
    return (
      <iframe width="100%" height="100%" frameBorder="0" style={styles.iframe} src="http://maps.google.com/maps?hl=cs&q=Adelaide&output=embed"></iframe>
    );
  }
}

export default Map;
