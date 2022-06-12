const { createStore } = require('redux');
let store = createStore(appReducer);
const createFile = require('../utils/downloadFile');
const editArray = require('../utils/editArray');
const readFiles = require('../utils/readFiles');

store.dispatch({ type: 'LIST' });

async function appReducer(state, action) {
  switch (action.type) {
    case 'LIST':
      return await readFiles();
    case 'SCAN':
      const newData = editArray(await state, await readFiles());
      return newData;
    default:
      return state;
  }
}

async function getList(req, res) {
  try {
    res.status(200).json(await store.getState());
  } catch (error) {
    res.status(400).json({
      success: false,
      data: 'getList func error',
    });
  }
}

async function scanFiles(req, res) {
  try {
    store.dispatch({ type: 'SCAN' });
    res.status(200).json({
      msg: 'Files scanned',
      data: await store.getState(),
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: 'scanFiles func error',
    });
  }
}

async function downloadState(req, res) {
  try {
    const result = await store.getState();
    createFile(result);
    res.status(200).json({
      msg: 'Data downloaded',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: 'downloadState func error',
    });
  }
}

module.exports = {
  getList,
  scanFiles,
  downloadState,
};
