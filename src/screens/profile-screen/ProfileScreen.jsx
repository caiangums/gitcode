import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Button, Image, ProfileImage, Text, Card, Loader} from '_components';
import {authActions} from '_store/auth';
import {userActions} from '_store/user';
import {isObjectEmpty, isArrayEmpty, isStringEmpty} from '_utils/validation';
import {parseNumericValues} from '_utils/parsing';
import {revokeTokenAccess} from '_services/auth';

import styles from './styles';

function ProfileInfo({avatar_url, login, name, bio}) {
  return (
    <>
      <ProfileImage style={styles.profileImage} source={avatar_url} />

      <Text type="subtitle" style={styles.userLoginText}>{`@${login}`}</Text>

      {!isStringEmpty(name) && (
        <Text type="title" style={styles.userNameText}>
          {name}
        </Text>
      )}

      <Card style={styles.contentCard}>
        <Text style={styles.bio}>{isStringEmpty(bio) ? 'No Bio.' : bio}</Text>
      </Card>
    </>
  );
}

function ProfileStats({public_repos, followers, following}) {
  const numericValues = [public_repos, followers, following];

  return (
    <Card style={[styles.contentCard, styles.infoCard]}>
      <Text bold style={styles.infoCount}>
        {parseNumericValues(numericValues)}
      </Text>

      <Text style={styles.infoDescription}>
        {'Public Personal Repos\nFollowers\nFollowing'}
      </Text>
    </Card>
  );
}

function ProfileScreen({
  navigation,
  userInfo,
  getUserInfo,
  resetAllUserInfo,
  logout,
}) {
  useEffect(() => {
    if (userInfo && isObjectEmpty(userInfo)) {
      const fetchUserInfo = async () => {
        try {
          await getUserInfo();
        } catch (err) {
          console.log('error on fetching user info', err);
          navigation.navigate('Login');
        }
      };

      fetchUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const onLogoutPress = async () => {
    await logout();
    await resetAllUserInfo();
    navigation.navigate('Login');
  };

  const onLogoutLongPress = async () => {
    await revokeTokenAccess();
    await onLogoutPress();
  };

  if (userInfo && isObjectEmpty(userInfo)) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Image style={styles.gitcodeImage} type="gitcode" />

        <Button
          type="danger"
          title="Logout"
          style={styles.logoutButton}
          onPress={onLogoutPress}
          onLongPress={onLogoutLongPress}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <ProfileInfo {...userInfo} />

        <Button
          title="See Repos"
          style={styles.seeReposButton}
          onPress={() => navigation.push('Repos')}
          disabled={isArrayEmpty(userInfo.public_repos)}
        />

        <ProfileStats {...userInfo} />
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({userInfo: state.user.userInfo});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...authActions,
      ...userActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
