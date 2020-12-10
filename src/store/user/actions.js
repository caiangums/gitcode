import TYPES from './types';
import * as GithubService from '_services/github';
import * as KeychainService from '_services/keychain';
import {isStringEmpty} from '_utils/validation';

const getToken = async () => {
  let token = '';
  try {
    token = await KeychainService.get();
  } catch (err) {
    console.log('Error on acessing Keychain at getUserInfo', err);
    throw err;
  }

  return token;
};

export const getUserInfo = () => async (dispatch) => {
  let secret;
  try {
    secret = await getToken();
  } catch (err) {
    throw err;
  }

  if (secret && !isStringEmpty(secret.password)) {
    try {
      const {data} = await GithubService.getUserInfo(secret.password);

      dispatch({
        type: TYPES.GET_USER_INFO,
        payload: data,
      });
    } catch (err) {
      console.log('Error on fetching userInfo', err);
      throw err;
    }
  }
};

export const getRepos = () => async (dispatch) => {
  let secret;
  try {
    secret = await getToken();
  } catch (err) {
    throw err;
  }

  if (secret && !isStringEmpty(secret.password)) {
    try {
      const {data} = await GithubService.getRepos(secret.password);

      dispatch({
        type: TYPES.GET_USER_REPOS,
        payload: data,
      });
    } catch (err) {
      console.log('Error on fetching getRepos', err);
      throw err;
    }
  }
};

export const resetAllUserInfo = () => async (dispatch) => {
  dispatch({
    type: TYPES.RESET_USER_INFO,
  });
};
