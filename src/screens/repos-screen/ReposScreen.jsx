import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Button, Text, Card, Loader} from '_components';
import {userActions} from '_store/user';
import {parseProfileStatNumber} from '_utils/parsing';
import {isArrayEmpty} from '_utils/validation';

import styles from './styles';

function ReposHeaderTitle({userLogin}) {
  return (
    <View style={styles.headerTitleContainer}>
      <Text type="subtitle">{`@${userLogin} `}</Text>
      <Text bold type="subtitle">
        Repos
      </Text>
    </View>
  );
}

function RepoItem({name, description, language, stargazers_count}) {
  return (
    <Card style={styles.repoCard}>
      <Text bold>{name}</Text>

      <View style={styles.repoInfo}>
        <Text bold type="small" style={styles.starsCount}>
          {parseProfileStatNumber(stargazers_count)}
        </Text>

        <Text type="small" style={styles.starsLabel}>
          Stars
        </Text>
      </View>

      <View style={styles.repoFullInfo}>
        {description && <Text type="small">{description}</Text>}

        {language && (
          <>
            <Text style={styles.repoLanguages} type="small" bold>
              Language
            </Text>

            <Text type="small">{language}</Text>
          </>
        )}
      </View>
    </Card>
  );
}

function ReposList({repos, getRepoFullInfo}) {
  return (
    <View style={styles.content}>
      <FlatList
        data={repos}
        renderItem={({item}) => (
          <RepoItem {...item} getRepoFullInfo={getRepoFullInfo} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

function ReposScreen({
  navigation,
  repos,
  userLogin,
  getRepos,
  getRepoFullInfo,
}) {
  useEffect(() => {
    if (repos && isArrayEmpty(repos)) {
      const fetchRepos = async () => {
        try {
          await getRepos();
        } catch (err) {
          console.log('error on fetching user info', err);
          navigation.navigate('Login');
        }
      };
      fetchRepos();
    }
  }, [navigation, repos, getRepos]);

  if (repos && isArrayEmpty(repos)) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Button
          style={styles.backButton}
          type="danger"
          title="Back"
          onPress={async () => {
            navigation.pop();
          }}
        />

        <ReposHeaderTitle userLogin={userLogin} />
      </View>

      <ReposList repos={repos} getRepoFullInfo={getRepoFullInfo} />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  repos: state.user.repos,
  userLogin: state.user.userInfo.login,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...userActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReposScreen);
