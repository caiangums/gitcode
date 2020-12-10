import TYPES from './types';
import * as AuthService from '_services/auth';
import * as KeychainService from '_services/keychain';
import {isStringEmpty} from '_utils/validation';

export const login = (hasSavedToken) => async (dispatch) => {
  if (hasSavedToken) {
    dispatch({
      type: TYPES.SET_LOGIN,
    });
    return;
  }

  let result;

  try {
    result = await AuthService.login();
  } catch (err) {
    console.log('Error on login', err);
    throw err;
  }

  if (result) {
    try {
      await KeychainService.save('acessToken', result.accessToken);
    } catch (err) {
      console.log('Error on Keychain access at login', err);
      throw err;
    }

    dispatch({
      type: TYPES.SET_LOGIN,
    });
  }
};

export const logout = () => async (dispatch) => {
  let secret;

  try {
    secret = await KeychainService.get();
  } catch (err) {
    console.log('Error on Keychain acess at logout', err);
    return;
  }

  if (secret && !isStringEmpty(secret.password)) {
    try {
      await AuthService.logout(secret.password);

      await KeychainService.reset();
    } catch (err) {
      console.log('Error on logout', err);
      return;
    }
  }

  dispatch({
    type: TYPES.SET_LOGOUT,
  });
};
