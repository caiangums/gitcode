import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {MAIN_COLOR} from '_constants/colors';

import styles from './styles';

function Loader() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.content, styles.loadingContent]}>
        <ActivityIndicator size="large" color={MAIN_COLOR} />
      </View>
    </SafeAreaView>
  );
}

export default Loader;
