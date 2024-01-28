const { createReadStream } = require('fs');
const { join } = require('path')
const ytdl = require('ytdl-core');

const handleDownloadController = (req, res, next) => {
    const filePath = join(__dirname, '..', 'videos/video.mp4');
    const { ytVideoUrl } = req.body;

    ytdl(ytVideoUrl).pipe()


    res.setHeader('Content-Type', 'video/mp4');
    const stream = createReadStream(filePath);
    stream.pipe(res);

}

module.exports = handleDownloadController; 