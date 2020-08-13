const SORT_TYPES = require('../constants/sortTypes');

const sortArrayBy = ({ array, sortBy, sortOrder = SORT_TYPES.ASC }) => {
  if (!Array.isArray(array)) {
    return [];
  }

  if (!sortBy) {
    return array;
  }

  const sortComparator = (item1, item2) => {
    const value1 = item1 && item1[sortBy] ? item1[sortBy] : 0;
    const value2 = item2 && item2[sortBy] ? item2[sortBy] : 0;

    if (value1 === value2) {
      return 0;
    }
    const condition = sortOrder === SORT_TYPES.DESC ? value2 > value1 : value1 > value2;
    return condition ? 1 : -1;
  };

  return [...array].sort(sortComparator);
};

module.exports = {
  sortArrayBy,
};
