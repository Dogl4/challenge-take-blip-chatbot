const { getRepoApi } = require('../services/repo.service');

const getRepo = async (_req, res) => {
  try {
    const repo = await getRepoApi();
    res.status(200).json(repo);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRepo };
