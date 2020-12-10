import {StyleSheet} from 'react-native';

import {BACKGROUND_APP_COLOR} from '_constants/colors';
import {SCREEN_WIDTH} from '_constants/screen';

const CONTENT_SIZE = SCREEN_WIDTH * 0.9;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: BACKGROUND_APP_COLOR,
  },

  content: {
    flex: 1,
    width: CONTENT_SIZE,
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
