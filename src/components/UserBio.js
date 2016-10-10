import React from 'react';

const pStyles = {
	fontSize: '1.3em',
	lineHeight: '1.5', 
  textAlign: 'justify'
}

const UserBio = (props) => (
	<p style={pStyles}>
		{props.src}
	</p>
)

UserBio.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default UserBio;
