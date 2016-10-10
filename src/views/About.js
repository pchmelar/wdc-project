import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserPicture from '../components/UserPicture';
import UserBio from '../components/UserBio';
import axios from 'axios';

// obtain user info from API
const userName = "John Appleseed";
const userImage = "http://pchmelar.cz/data/homer.png";
//const userBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed lacus eget turpis lobortis dignissim. Morbi venenatis neque ut dui cursus, vitae feugiat velit efficitur. Maecenas scelerisque nisl eu pretium semper. In ultrices at nulla eu rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus bibendum augue vitae bibendum. Curabitur tempus at ipsum nec consequat. Nullam feugiat commodo arcu, in sodales lacus maximus sit amet. Phasellus posuere tortor eu metus rhoncus blandit. Nulla eu lectus iaculis, congue metus eu, fringilla ipsum. Mauris eros metus, accumsan malesuada bibendum vitae, pellentesque in lorem. Fusce enim dolor, consectetur at massa non, tempus pellentesque dolor. Quisque non suscipit massa. Phasellus lectus ante, tempus sed massa id, venenatis interdum ante. Pellentesque suscipit pellentesque metus, tempor placerat massa tempus vel. Donec non odio at ante scelerisque vestibulum ac sed dui. Vivamus facilisis mi pretium, suscipit lectus sit amet, rutrum dolor. Cras finibus sem eu libero rutrum sollicitudin. Proin nulla dolor, auctor sit amet sem sit amet, feugiat placerat nisi. Integer velit risus, faucibus eget pretium vel, sollicitudin ac libero. Morbi iaculis auctor eros in scelerisque. Nulla facilisi. Cras placerat enim mollis, pharetra est eget, pretium mauris.";

const outerDivStyles = {
  textAlign: 'center',
  margin: '30px 0 50px 0',
  padding: '0 20px 10px 20px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E8E8E8',
  borderRadius: 5
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userBio: ''
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/blog/' + this.props.params.blogId)
      .then((res) => {
        this.setState({
          userBio: res.data.about
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
          <Col sm={10} smOffset={1} md={8} mdOffset={2}>
            <div style={outerDivStyles}>
              <br />
              <br />
              <UserPicture src={userImage} />
              <br />
              <h2>{userName}</h2>
              <br />
              <br />
              <UserBio src={this.state.userBio} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
