const graphicsMarkupCollection = require('../database/graphicsMarkupCollection.json');
const SORT_TYPES = require('../constants/sortTypes');
const APP_CONFIG = require('../configs/appConfig');
const { sortArrayBy } = require('../utils/array');

const DEFAULT_OPTIONS = {
  page: APP_CONFIG.APP_DEFAULT_PAGE,
  limit: APP_CONFIG.APP_DEFAULT_PAGE_LIMIT,
  sortOrder: SORT_TYPES.ASC,
  sortBy: 'in_frame',
};

class GraphicsMarkupService {
  getAll(options = {}) {
    const {
      page,
      limit,
      sortBy,
      sortOrder
    } = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    const collection = sortArrayBy({ array: graphicsMarkupCollection, sortBy, sortOrder });

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    console.log('page', page);
    console.log('page 1', page - 1);
    console.log('page 2', limit);
    console.log('startIndex', startIndex);
    console.log('endIndex', endIndex);

    return collection.slice(startIndex, endIndex);
  }
  getCount() {
    return graphicsMarkupCollection.length;
  }
}

module.exports = new GraphicsMarkupService();
