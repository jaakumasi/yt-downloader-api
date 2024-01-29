const ytdl = require("ytdl-core");

const handleGetInfoController = async (req, res, next) => {
    const { ytVideoUrl } = req.body;
    const info = await ytdl.getInfo(ytVideoUrl);
    console.log(info)

    res.json(info);
    next();
}

module.exports = handleGetInfoController;
