const ytdl = require("ytdl-core");
const { logger } = require("../shared/utils");

const handleGetInfoController = async (req, res, next) => {
    const { ytVideoUrl } = req.body;
    const info = await ytdl.getInfo(ytVideoUrl);
    logger('get info controller: ', info);

    res.json(info);
    // next();
}

module.exports = handleGetInfoController;
