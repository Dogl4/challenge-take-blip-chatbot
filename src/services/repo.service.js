const { getApi } = require('../../challenge/Api');

const { filterRepoLanguage, formatRepo, sortByDate } = require('../utils');

const getRepoApi = async () => {
  try {
    const data = await getApi();
    return data
      .filter(filterRepoLanguage)
      .map(formatRepo)
      .sort(sortByDate)
      .slice(0, 5);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getRepoApi };
