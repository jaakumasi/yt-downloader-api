const handleTestController = require('../controllers/testController');

const testRouter = require('express').Router();

testRouter.get('/', (req, res, next) => {
    handleTestController(req, res, next);
})

module.exports = testRouter;