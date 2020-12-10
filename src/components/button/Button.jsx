import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from '_components';
import Types from './types';

import styles from './styles';

const DEFAULT_TYPE = 'main';

function Button({
  style,
  type = DEFAULT_TYPE,
  onPress,
  onLongPress,
  title,
  textStyle,
  disabled,
}) {
  const {buttonStyles} = Types.get(type);

  const combinedStyles = [
    styles.button,
    buttonStyles,
    disabled && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      style={combinedStyles}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}>
      <Text bold style={[styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
