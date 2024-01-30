const ytdl = require("ytdl-core");
const { logger } = require("../shared/utils");

const handleVerifyUrlController = (req, res, next) => {
    const { ytVideoUrl } = req.body;

    const isValid = ytdl.validateURL(ytVideoUrl);
    logger(`verify url controller: ${isValid}`)

    res.json({ isValid });
}

module.exports = handleVerifyUrlController;