const express = require('express');
const {
  getList,
  scanFiles,
  downloadState,
} = require('../controller/controller');

const allRoutes = express.Router();

allRoutes.get('/list', getList);
allRoutes.get('/scan',scanFiles);
allRoutes.get('/download-state', downloadState);

module.exports = allRoutes;
