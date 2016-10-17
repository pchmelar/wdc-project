import React from 'react';
import { Link } from 'react-router';

const styles = {
  header: {
    height: 150,
    background: 'salmon',
    textAlign: 'center'
  },
  blogName: {
    float: 'left',
    width: '80%',
    margin: '0 0 0 10%',
    padding: '50px 0 0 0',
    color: '#FFFFFF',
    fontSize: '3em'
  },
  login: {
    width: '10%',
    margin: '0 0 0 90%',
    padding: '10px 30px 0 0',
    textAlign: 'right',
    fontSize: '1.1em'
  }
}

const Header = (props) => (
  <div style={styles.header}>
    <div style={styles.blogName}>
      {props.title}
    </div>
    { !props.homepage && <div style={styles.login}>
      <Link to="/" style={{color: 'white'}}>Log in</Link>
    </div> }
  </div>
)

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  homepage: React.PropTypes.bool.isRequired
};

export default Header;
