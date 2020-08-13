const express = require('express');
const graphicsMarkupRouter = require('./graphicsMarkupRouter');

const router = express.Router();

router.use('/api/graphics-markup', graphicsMarkupRouter);

router.route('/*')
  .get((req, res) => {
    res.status(404).send('Route not found');
  });

module.exports = router;
