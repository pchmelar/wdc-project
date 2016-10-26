import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { NewPostForm } from '../components/index.js';

const styles = {
  outerDiv: {
    margin: '30px 0 50px 0'
  }
};

class NewPost extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={10} smOffset={1} md={8} mdOffset={2}>
            <div style={styles.outerDiv}>
              <h2>Publish a new post</h2>
              <br />
              <NewPostForm user={this.props.data.user}/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

NewPost.propTypes = {
  data: React.PropTypes.shape({
    user: React.PropTypes.object
  })
}

export default NewPost;
