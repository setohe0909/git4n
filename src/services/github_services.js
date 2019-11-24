import axios from 'axios';

const apiGithub = 'https://api.github.com/';

const api = {
  get_repos(github) {
    return axios.get(`${apiGithub}users/${github}/repos`);
  },
  get_user_data(user) {
    return axios.get(`${apiGithub}users/${user}`);
  }
};

export default api;
