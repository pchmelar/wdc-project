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
		<Col sm={10} smOffset={2}>
			<div style={styles.outerDiv}>
				<Row>
					<Col sm={6}>
						<h2>{props.post.headline}</h2>
					</Col>
					<Col sm={6}>
						<h4 style={styles.location}>{props.post.location}</h4>
					</Col>
				</Row>
				<br />
				<p>
					{props.post.content}
				</p>
			</div>
		</Col>
	</Row>
)

Post.propTypes = {
	post: React.PropTypes.shape({
    headline: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
  })
}

export default Post;
