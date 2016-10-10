import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NewPostForm from '../components/NewPostForm';

const outerDivStyles = {
  margin: '30px 0 50px 0'
};

class NewPost extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={10} smOffset={1} md={8} mdOffset={2}>
            <div style={outerDivStyles}>
              <h2>Publish new post</h2>
              <br />
              <NewPostForm />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NewPost;
