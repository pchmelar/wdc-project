import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';

// obtain posts from API
const posts = [
	{
		id: 0,
		headline: "#Post2",
		location: "Adelaide",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed lacus eget turpis lobortis dignissim. Morbi venenatis neque ut dui cursus, vitae feugiat velit efficitur. Maecenas scelerisque nisl eu pretium semper. In ultrices at nulla eu rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus bibendum augue vitae bibendum. Curabitur tempus at ipsum nec consequat. Nullam feugiat commodo arcu, in sodales lacus maximus sit amet. Phasellus posuere tortor eu metus rhoncus blandit. Nulla eu lectus iaculis, congue metus eu, fringilla ipsum. Mauris eros metus, accumsan malesuada bibendum vitae, pellentesque in lorem. Fusce enim dolor, consectetur at massa non, tempus pellentesque dolor. Quisque non suscipit massa. Phasellus lectus ante, tempus sed massa id, venenatis interdum ante. Pellentesque suscipit pellentesque metus, tempor placerat massa tempus vel. Donec non odio at ante scelerisque vestibulum ac sed dui. Vivamus facilisis mi pretium, suscipit lectus sit amet, rutrum dolor. Cras finibus sem eu libero rutrum sollicitudin. Proin nulla dolor, auctor sit amet sem sit amet, feugiat placerat nisi. Integer velit risus, faucibus eget pretium vel, sollicitudin ac libero. Morbi iaculis auctor eros in scelerisque. Nulla facilisi. Cras placerat enim mollis, pharetra est eget, pretium mauris."
	},
	{
		id: 1,
		headline: "#Post1",
		location: "Perth",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed lacus eget turpis lobortis dignissim. Morbi venenatis neque ut dui cursus, vitae feugiat velit efficitur. Maecenas scelerisque nisl eu pretium semper. In ultrices at nulla eu rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus bibendum augue vitae bibendum. Curabitur tempus at ipsum nec consequat. Nullam feugiat commodo arcu, in sodales lacus maximus sit amet. Phasellus posuere tortor eu metus rhoncus blandit. Nulla eu lectus iaculis, congue metus eu, fringilla ipsum. Mauris eros metus, accumsan malesuada bibendum vitae, pellentesque in lorem. Fusce enim dolor, consectetur at massa non, tempus pellentesque dolor. Quisque non suscipit massa. Phasellus lectus ante, tempus sed massa id, venenatis interdum ante. Pellentesque suscipit pellentesque metus, tempor placerat massa tempus vel. Donec non odio at ante scelerisque vestibulum ac sed dui. Vivamus facilisis mi pretium, suscipit lectus sit amet, rutrum dolor. Cras finibus sem eu libero rutrum sollicitudin. Proin nulla dolor, auctor sit amet sem sit amet, feugiat placerat nisi. Integer velit risus, faucibus eget pretium vel, sollicitudin ac libero. Morbi iaculis auctor eros in scelerisque. Nulla facilisi. Cras placerat enim mollis, pharetra est eget, pretium mauris."
	},
];

const outerDivStyles = {
  margin: '0 0 50px 0'
};

class Timeline extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} smOffset={0} md={10} mdOffset={1} lg={8} lgOffset={2}>
          	<div style={outerDivStyles}>
    					{posts.map(function(object, i){
        				return <Post post={object} key={i} />;
    					})}
    				</div>  
					</Col>
        </Row>
      </Grid>
    );
  }
}

export default Timeline;
