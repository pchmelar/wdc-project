import React from 'react';
import { Row, Col } from 'react-bootstrap';

const outerDivStyles = {
	margin: '30px 0 0 0',
	padding: '0 20px 10px 20px',
	backgroundColor: '#FFFFFF',
	border: '1px solid #E8E8E8',
	borderRadius: 5
}

const pStyles = {
	fontSize: '1.3em',
	lineHeight: '1.5', 
  textAlign: 'justify'
}

const locationStyles = {
	padding: '15px 0 0 0',
	textAlign: 'right'
}

const Post = (props) => (
	<Row>
		<Col sm={10} smOffset={2}>
			<div style={outerDivStyles}>
				<Row>
					<Col sm={6}>
						<h2>{props.post.headline}</h2>
					</Col>
					<Col sm={6}>
						<h4 style={locationStyles}>{props.post.location}</h4>
					</Col>
				</Row>
				<br />
				<p style={pStyles}>
					{props.post.content}
				</p>
			</div>
		</Col>
	</Row>
)

Post.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Post;
