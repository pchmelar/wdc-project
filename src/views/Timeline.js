import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Post } from '../components/index.js';
import axios from 'axios';

const styles = {
  outerDiv: {
    margin: '0 0 50px 0'
  }
};

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-28571.herokuapp.com/blog/' + this.props.params.blogId + '/post')
      .then((res) => {
        this.setState({
          posts: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} smOffset={0} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <div style={styles.outerDiv}>
              {this.state.posts.map(function(object, i){
                return <Post data={object} key={i} />;
              })}
            </div>  
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Timeline;
