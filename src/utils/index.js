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

module.exports = {
  filterRepoLanguage,
  formatRepo,
  sortByDate,
};
