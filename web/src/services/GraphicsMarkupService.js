import axios from 'axios';
import APP_CONFIG from '../configs/appConfig';

const DEFAULT_OPTIONS = {
  page: APP_CONFIG.APP_DEFAULT_PAGE,
  limit: APP_CONFIG.APP_DEFAULT_PAGE_LIMIT,
};

class GraphicsMarkupService {
  getAll(options = {}) {
    const url = new URL('/api/graphics-markup', APP_CONFIG.API_URL);
    const params = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    return axios.get(url.toString(), { params });
  }
}

export default new GraphicsMarkupService();
