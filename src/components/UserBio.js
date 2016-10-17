import React from 'react';

const UserBio = (props) => (
  <p>
		{props.src}
	</p>
)

UserBio.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default UserBio;
