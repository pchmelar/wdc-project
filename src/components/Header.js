import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
  header: {
    height: 150,
    background: 'salmon',
    textAlign: 'center'
  },
  headerLink: {
    color: 'white',
    textDecoration: 'none'
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
    fontSize: '1.1em',
    color: 'white'
  }
}

class Header extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    this.props.onRequestLogout();
  };

  render() {
    return (
      <div style={styles.header}>
        <div style={styles.blogName}>
          <Link to={this.props.link} style={styles.headerLink}>{this.props.title}</Link>
        </div>
        { !this.props.homepage && <div style={styles.login}>
          { this.props.user === null ?
            <Link to="/" style={{color: 'white'}}>
              Log in
            </Link>
            :
            <a href onClick={this.handleLogout} style={{color: 'white'}}>
              Log out
            </a>
          }
        </div> }
      </div>
    );
  }
}

Header.propTypes = {
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  homepage: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object,
  onRequestLogout: React.PropTypes.func
};

export default Header;
