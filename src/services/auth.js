import {Linking} from 'react-native';
import {authorize, revoke} from 'react-native-app-auth';
import {GITHUB_APP_CLIENT_ID, GITHUB_APP_CLIENT_SECRET} from '@env';

const GITHUB_BASE_URL = 'https://github.com/';
const REVOKE_ACCESS_TOKEN_URL = `${GITHUB_BASE_URL}settings/connections/applications/${GITHUB_APP_CLIENT_ID}`;

const authorizationConfig = {
  redirectUrl: 'com.gitcode://oauthredirect',
  clientId: GITHUB_APP_CLIENT_ID,
  clientSecret: GITHUB_APP_CLIENT_SECRET,
  scopes: ['identity'],
  serviceConfiguration: {
    authorizationEndpoint: `${GITHUB_BASE_URL}login/oauth/authorize`,
    tokenEndpoint: `${GITHUB_BASE_URL}login/oauth/access_token`,
    revocationEndpoint: `${GITHUB_BASE_URL}settings/connections/applications/${GITHUB_APP_CLIENT_ID}`,
  },
};

export const login = () => authorize(authorizationConfig);

export const logout = (tokenToRevoke) =>
  revoke(authorizationConfig, {
    tokenToRevoke,
    includeBasicAuth: true,
    sendClientId: true,
  });

export const revokeTokenAccess = async () => {
  const supported = await Linking.canOpenURL(REVOKE_ACCESS_TOKEN_URL);

  if (supported) {
    try {
      await Linking.openURL(REVOKE_ACCESS_TOKEN_URL);
    } catch (err) {
      console.log('Error on opening the URL');
      throw err;
    }
  }
};
