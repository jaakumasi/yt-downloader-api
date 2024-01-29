const handleVerifyUrlController = require('../controllers/verifyUrlController');

const verfifyUrlRouter = require('express').Router();

verfifyUrlRouter.post('/', (req, res, next) => {
    handleVerifyUrlController(req, res, next);
})

module.exports = verfifyUrlRouter;