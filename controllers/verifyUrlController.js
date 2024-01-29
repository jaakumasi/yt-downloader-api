const ytdl = require("ytdl-core");

const handleVerifyUrlController = (req, res, next) => {
    const { ytVideoUrl } = req.body;
    console.log('in verify controller')

    const isValid = ytdl.validateURL(ytVideoUrl);
    console.log(isValid)


    res.json({ isValid });
}

module.exports = handleVerifyUrlController;