import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { UserBio, UserPicture } from '../components/index.js';

const userName = "John Appleseed";
const userImage = "http://pchmelar.cz/data/homer.png";

const styles = {
  outerDiv: {
    textAlign: 'center',
    margin: '30px 0 50px 0',
    padding: '0 20px 10px 20px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E8E8',
    borderRadius: 5
  }
}

class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={10} smOffset={1} md={8} mdOffset={2}>
            <div style={styles.outerDiv}>
              <br />
              <br />
              <UserPicture src={userImage} />
              <br />
              <h2>{userName}</h2>
              <br />
              <br />
              <UserBio src={this.props.data.about} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

About.propTypes = {
  data: React.PropTypes.shape({
    about: React.PropTypes.string.isRequired
  })
}

export default About;
