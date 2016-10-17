import React from 'react';

const styles = {
  img: {
    width: 150,
    height: 150,
    borderRadius: '50%'
  }
}

const UserPicture = (props) => (
  <img src={props.src} style={styles.img} alt="profile" />
)

UserPicture.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default UserPicture;
