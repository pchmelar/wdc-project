import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import RegForm from '../components/RegForm';

const outerDivStyles = {
  margin: '50px 0 50px 0'
};

class Homepage extends Component {
  loginSuccess = (res) => {
    browserHistory.push(res.data.blogid);
  }
  render() {
    return (
      <div>
        <Header title="Travel Diary" homepage={true} />
        <Grid>
          <div style={outerDivStyles}>
            <Row>
              <Col sm={10} smOffset={1} md={8} mdOffset={2}>
                <h2 style={{textAlign: 'center'}}>Your travel diary</h2>
                <br />
                <LoginForm onSuccess={this.loginSuccess} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={10} smOffset={1} md={8} mdOffset={2}>
                <hr style={{border: '1px solid #DDDDDD'}} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={10} smOffset={1} md={8} mdOffset={2}>
                <h2 style={{textAlign: 'center'}}>New travel diary</h2>
                <br />
                <RegForm />
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
