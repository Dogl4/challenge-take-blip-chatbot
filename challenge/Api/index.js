require('dotenv').config();
const axios = require('axios');

const URL = process.env.URL || 'https://api.github.com/orgs/takenet/repos';

const getApi = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    const { message } = error.response.data;
    throw new Error(message);
  }
};

module.exports = { getApi };
