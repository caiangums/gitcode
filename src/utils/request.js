export const buildGithubRequestHeader = (token) => ({
  headers: {
    Authorization: `token ${token}`,
  },
});
