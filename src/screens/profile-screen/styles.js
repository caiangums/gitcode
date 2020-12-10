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

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gitcodeImage: {
    marginVertical: 20,
  },

  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 30,
  },

  content: {
    flex: 1,
    width: CONTENT_SIZE,
    alignItems: 'center',
    paddingHorizontal: '8%',
  },

  profileImage: {
    marginVertical: 10,
  },

  userLoginText: {
    marginVertical: 10,
  },

  userNameText: {
    width: '100%',
    marginVertical: 16,
    textAlign: 'left',
  },

  contentCard: {
    width: '100%',
    textAlign: 'left',
  },

  infoCard: {
    flexDirection: 'row',
  },

  bio: {
    width: '100%',
  },

  infoCount: {
    width: 40,
    textAlign: 'right',
  },

  infoDescription: {
    marginLeft: 14,
  },

  seeReposButton: {
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
});

export default styles;
