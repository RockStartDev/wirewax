const APP_CONFIG = require('../configs/appConfig');
const { GraphicsMarkupService } = require('../services');

class GraphicsMarkupController {
  getAll(req, res) {
    let {
      page,
      limit,
      sortBy,
      sortOrder,
    } = req.query;

    page = Number.parseInt(page) || APP_CONFIG.APP_DEFAULT_PAGE;
    limit = Number.parseInt(limit) || APP_CONFIG.APP_DEFAULT_PAGE_LIMIT;

    try {
      const data = GraphicsMarkupService.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
      });
      const count = GraphicsMarkupService.getCount();
      const pageCount = Math.ceil(count / limit);

      const response = {
        page,
        pageCount,
        data,
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new GraphicsMarkupController();
