const ytdl = require("ytdl-core");

const handleVerifyUrlController = (req, res, next) => {

    const { ytVideoUrl } = req.body;
    console.log(ytVideoUrl)
    const isValid = ytdl.validateURL(ytVideoUrl);

    res.json({ isValid });
}

module.exports = handleVerifyUrlController;