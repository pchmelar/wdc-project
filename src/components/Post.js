import React from 'react';
import { Row, Col } from 'react-bootstrap';

const styles = {
  outerDiv: {
    margin: '30px 0 0 0',
    padding: '0 20px 10px 20px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E8E8',
    borderRadius: 5
  },
  location: {
    padding: '15px 0 0 0',
    textAlign: 'right'
  }
}

const Post = (props) => (
  <Row>
		<Col>
			<div style={styles.outerDiv}>
				<Row>
					<Col sm={6}>
						<h2>{props.data.title}</h2>
					</Col>
					<Col sm={6}>
						<h4 style={styles.location}>{props.data.location.description}</h4>
					</Col>
				</Row>
				<br />
				<p>
					{props.data.content}
				</p>
			</div>
		</Col>
	</Row>
)

Post.propTypes = {
	data: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    location: React.PropTypes.shape({
    	description: React.PropTypes.string.isRequired,
    	lat: React.PropTypes.number.isRequired,
    	lng: React.PropTypes.number.isRequired
    })
  })
}

export default Post;
