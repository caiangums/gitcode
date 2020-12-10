import {StyleSheet} from 'react-native';

import {TEXT_COLOR} from '_constants/colors';
import {
  FONT_FAMILY,
  FONT_SIZE,
  TITLE_FONT_SIZE,
  SUBTITLE_FONT_SIZE,
  FONT_SIZE_SMALL,
} from '_constants/fonts';

const styles = StyleSheet.create({
  text: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
  },

  bold: {
    fontWeight: 'bold',
  },

  normal: {},

  title: {
    fontWeight: 'bold',
    fontSize: TITLE_FONT_SIZE,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: SUBTITLE_FONT_SIZE,
  },

  small: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_SMALL,
  },
});

export default styles;
