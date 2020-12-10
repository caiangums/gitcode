import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Loader} from '_components';
import * as KeychainService from '_services/keychain';
import {authActions} from '_store/auth';
import {isObjectEmpty} from '_utils/validation';

function StartScreen({navigation, isLogged, login}) {
  useEffect(() => {
    if (isLogged) {
      navigation.navigate('Home');
    } else {
      async function checkForAuthToken() {
        const secret = await KeychainService.get();

        if (secret && !isObjectEmpty(secret)) {
          await login(true);
          navigation.navigate('Home');
          return;
        }

        navigation.navigate('Login');
      }

      checkForAuthToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return <Loader />;
}

const mapStateToProps = (state) => ({isLogged: state.auth.isLogged});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...authActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
