import React from 'react';
import {Text as ReactNativeText} from 'react-native';

import Types from './types';

import styles from './styles';

const DEFAULT_TYPE = 'normal';

function Text({style, type = DEFAULT_TYPE, bold, children}) {
  const {textStyles} = Types.get(type);

  const combinedStyles = [styles.text, textStyles, bold && styles.bold, style];

  return <ReactNativeText style={combinedStyles}>{children}</ReactNativeText>;
}

export default Text;
