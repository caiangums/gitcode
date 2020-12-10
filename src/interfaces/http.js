import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/';

export const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
});
