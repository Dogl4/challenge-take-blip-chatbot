require('dotenv').config();
const axios = require('axios');

const URL = process.env.URL || 'https://api.github.com/orgs/takenet/repos';

const getApi = async () => {
  const { data } = await axios.get(URL);
  return data;
};

module.exports = { getApi };
