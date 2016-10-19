import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Post } from '../components/index.js';

const styles = {
  outerDiv: {
    margin: '0 0 50px 0'
  }
};

class Timeline extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} smOffset={0} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <div style={styles.outerDiv}>
              {this.props.data.posts.map(function(object, i){
                return <Post data={object} key={i} />;
              })}
            </div>  
          </Col>
        </Row>
      </Grid>
    );
  }
}

Timeline.propTypes = {
  data: React.PropTypes.shape({
    posts: React.PropTypes.array.isRequired
  })
}

export default Timeline;
