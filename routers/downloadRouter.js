const handleDownloadController = require('../controllers/downloadController');

const downloadRouter = require('express').Router();

downloadRouter.post('/', (req, res, next) => {
    handleDownloadController(req, res, next);
})

module.exports = downloadRouter;