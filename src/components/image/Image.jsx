import React from 'react';
import {Image as ReactNativeImage} from 'react-native';

import Types from './types';

function Image({style, type}) {
  if (!Types.has(type)) {
    return null;
  }

  const {image} = Types.get(type);

  return <ReactNativeImage style={style} source={image} />;
}

export default Image;
