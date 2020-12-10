import React from 'react';
import {Image as ReactNativeImage} from 'react-native';

import styles from './styles';

function ProfileImage({style, source}) {
  return (
    <ReactNativeImage
      style={[styles.profileImage, style]}
      source={{uri: source}}
    />
  );
}

export default ProfileImage;
