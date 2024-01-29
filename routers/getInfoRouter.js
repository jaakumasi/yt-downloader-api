const handleGetInfoController = require('../controllers/getInfoController');

const getInfoRouter = require('express').Router();

getInfoRouter.post('/', (req, res, next) => {
    handleGetInfoController(req, res, next);
})

module.exports = getInfoRouter;