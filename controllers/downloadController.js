const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path')
const ytdl = require('ytdl-core');

const handleDownloadController = (req, res, next) => {
    const { ytVideoUrl } = req.body;

    const randomID = Math.round(Math.random() * 1000000).toString().padStart(6);
    const videoPath = join(__dirname, '..', `videos/video-${randomID}.mp4`);

    const writeStream = createWriteStream(videoPath);
    ytdl(ytVideoUrl).pipe(writeStream);

    writeStream.on('finish', () => {
        res.setHeader('Content-Type', 'video/mp4');
        const stream = createReadStream(videoPath);
        stream.pipe(res);
    })
}

module.exports = handleDownloadController; 