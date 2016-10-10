import React from 'react';

const imgStyles = {
  width: 150,
  height: 150,
  borderRadius: '50%'
}

const UserPicture = (props) => (
  <img src={props.src} style={imgStyles} alt="profile" />
)

UserPicture.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default UserPicture;
