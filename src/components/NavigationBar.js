import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';

const styles = {
  navbar: {
    borderRadius: 0,
    backgroundColor: '#FFFFFF'
  }
}

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    }
  }

  handleToggle = () => {
    if (this.state.navExpanded === true) this.setState({ navExpanded: false });
    else this.setState({ navExpanded: true });
  };

  handleSelect = () => {
    this.setState({ navExpanded: false });
  };

  handleLoginLinkClick = () => {
    if (this.props.user) this.props.onRequestLogout();
    else browserHistory.push('/');
  };

  render() {
    return (
      <Navbar onToggle={this.handleToggle} expanded={this.state.navExpanded} style={styles.navbar}>
        <Navbar.Header className="visible-xs">
          <Navbar.Brand>
            Travel Diary
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.handleSelect}>
            <IndexLinkContainer to={`/${this.props.blogId}`}>
              <NavItem eventKey={1}>Timeline</NavItem>
            </IndexLinkContainer>
            <LinkContainer to={`/${this.props.blogId}/map`}>
              <NavItem eventKey={2}>Map</NavItem>
            </LinkContainer>
            <LinkContainer to={`/${this.props.blogId}/about`}>
              <NavItem eventKey={3}>About</NavItem>
            </LinkContainer>
            { this.props.data.owner && <LinkContainer to={`/${this.props.blogId}/newpost`}>
              <NavItem eventKey={4}>New post</NavItem>
            </LinkContainer> }
            <NavItem eventKey={5} onClick={this.handleLoginLinkClick} className="visible-xs">
              {this.props.data.owner ? 'Log out' : 'Log in'}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
  blogId: React.PropTypes.string.isRequired,
  onRequestLogout: React.PropTypes.func.isRequired,
  data: React.PropTypes.shape({
    owner: React.PropTypes.bool.isRequired
  })
}

export default NavigationBar;
