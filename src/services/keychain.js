import * as Keychain from 'react-native-keychain';

export const save = async (key, value) =>
  await Keychain.setGenericPassword(key, value);

export const get = async (key) => await Keychain.getGenericPassword();

export const reset = async () => await Keychain.resetGenericPassword();
