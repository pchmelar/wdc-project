import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const navbarStyles = {
  borderRadius: 0,
  backgroundColor: '#FFFFFF'
}

const NavigationBar = (props) => (
  <Navbar style={navbarStyles}>
    <Navbar.Header className="visible-xs">
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to={`/${props.blogId}`}>
          <NavItem eventKey={1}>Timeline</NavItem>
        </IndexLinkContainer>
        <LinkContainer to={`/${props.blogId}/map`}>
          <NavItem eventKey={2}>Map</NavItem>
        </LinkContainer>
        <LinkContainer to={`/${props.blogId}/about`}>
          <NavItem eventKey={3}>About</NavItem>
        </LinkContainer>
        <LinkContainer to={`/${props.blogId}/newpost`}>
          <NavItem eventKey={4}>New post</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

NavigationBar.propTypes = {
  blogId: React.PropTypes.string.isRequired
}

export default NavigationBar;
