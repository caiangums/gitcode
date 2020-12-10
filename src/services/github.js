import {githubApi} from '_interfaces/http';
import {buildGithubRequestHeader} from '_utils/request';

const USER_URL = 'user';
const USER_REPOS_URL = `${USER_URL}/repos`;

export const getUserInfo = (userToken) =>
  githubApi.get(USER_URL, buildGithubRequestHeader(userToken));

export const getRepos = (userToken) =>
  githubApi.get(USER_REPOS_URL, buildGithubRequestHeader(userToken));
