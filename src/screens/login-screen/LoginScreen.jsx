import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Image, Button, Loader} from '_components';
import {authActions} from '_store/auth';

import styles from './styles';

function LoginScreen({navigation, isLogged, login}) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLogged) {
      navigation.navigate('Home');
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  const onLoginPress = async () => {
    try {
      await login();

      navigation.navigate('Home');
    } catch (err) {
      console.log('Error on Login', err);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Image type="github" />

        <Button
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
          title="Login with GitHub"
          onPress={onLoginPress}
        />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({isLogged: state.auth.isLogged});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...authActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
