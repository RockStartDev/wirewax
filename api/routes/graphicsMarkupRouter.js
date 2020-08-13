const express = require('express');
const { GraphicsMarkupController } = require('../controllers');

const router = express.Router({mergeParams: true});

router.route('/')
  .get(GraphicsMarkupController.getAll);

module.exports = router;
