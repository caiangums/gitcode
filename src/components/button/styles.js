import {StyleSheet} from 'react-native';

import {
  MAIN_COLOR,
  DANGER_COLOR,
  INVERTED_TEXT_COLOR,
  DISABLED_COLOR,
} from '_constants/colors';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  main: {
    backgroundColor: MAIN_COLOR,
  },

  danger: {
    backgroundColor: DANGER_COLOR,
  },

  text: {
    color: INVERTED_TEXT_COLOR,
  },

  disabled: {
    backgroundColor: DISABLED_COLOR,
  },
});

export default styles;
