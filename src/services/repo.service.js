const { getApi } = require('../../challenge/Api');

const filterRepoLanguage = ({ language }) => language === 'C#';

const formatRepo = ({
  owner,
  full_name,
  description,
  language,
  created_at,
}) => ({
  image: owner.avatar_url,
  full_name,
  description,
  language,
  created_at,
});

const sortByDate = (a, b) => new Date(a.created_at) - new Date(b.created_at);

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
