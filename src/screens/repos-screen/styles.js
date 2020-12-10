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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  backButton: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },

  headerTitleContainer: {
    flexDirection: 'row',
    width: CONTENT_SIZE,
    paddingHorizontal: '8%',
    paddingVertical: 10,
  },

  content: {
    flex: 1,
    width: CONTENT_SIZE,
    paddingHorizontal: '4%',
  },

  repoCard: {
    width: '100%',
    textAlign: 'left',
    marginVertical: 12,
    paddingVertical: 12,
  },

  repoInfo: {
    flexDirection: 'row',
    paddingTop: 4,
  },

  starsCount: {
    width: 30,
    textAlign: 'right',
  },

  starsLabel: {
    marginLeft: 10,
  },

  repoFullInfo: {
    paddingTop: 6,
  },

  repoLanguages: {
    marginTop: 8,
    marginBottom: 6,
  },
});

export default styles;
