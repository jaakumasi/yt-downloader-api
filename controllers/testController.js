const handleTestController = (req, res, next) => {
    res.json({ 'knock-knock': 'Who\'s there?' });
    next();
}

module.exports = handleTestController;