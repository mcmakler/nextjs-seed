import 'isomorphic-fetch';
import config from './config';
import parseFetch from './parseFetch';

class ApiHelper {
  constructor() {
    this.apiUrl = config.apiUrl;
    this.parseFetch = parseFetch;
  }

  async get({ url }) {
    return fetch(url)
      .then(this.parseFetch)
      .catch(error => console.error('API ERROR', error)); // eslint-disable-line
  }
}

export default ApiHelper;
