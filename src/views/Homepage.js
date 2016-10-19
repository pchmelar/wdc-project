import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Header, LoginForm, RegForm } from '../components/index.js';

const styles = {
  outerDiv: {
    margin: '50px 0 50px 0'
  }
};

const Homepage = (props) => (
  <div>
    <Header 
      link="/"
      homepage={true} 
      data={{
        owner: false,
        title: "Travel Diary"
      }}
    />
    <Grid>
      <div style={styles.outerDiv}>
        <Row>
          <Col sm={10} smOffset={1} md={8} mdOffset={2}>
            <h2 style={{textAlign: 'center'}}>Your travel diary</h2>
            <br />
            <LoginForm />
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
)

export default Homepage;
