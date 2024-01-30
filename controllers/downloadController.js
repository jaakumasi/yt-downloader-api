const { createReadStream, createWriteStream, unlink } = require('fs');
const { join } = require('path')
const ytdl = require('ytdl-core');
const { logger } = require('../shared/utils')

const handleDownloadController = (req, res, next) => {
    const { ytVideoUrl } = req.body;
    logger(ytVideoUrl)

    try {
        const randomID = Math.round(Math.random() * 1000000).toString().padStart(6, '0');
        const videoPath = join(__dirname, '..', `videos/video-${randomID}.mp4`);

        const writeStream = createWriteStream(videoPath);
        ytdl(ytVideoUrl).pipe(writeStream);

        writeStream.on('finish', () => {
            logger('write complete! initiating download');

            res.setHeader('Content-Type', 'video/mp4');
            const readStream = createReadStream(videoPath);
            readStream.pipe(res);

            readStream.on('close', () => {
                unlink(videoPath, (err) => {
                    if (err) logger(err.message);
                });
            });
        });
        writeStream.on('ready', () => logger('ready'))
        writeStream.on('error', (error) => logger(error.message));
    } catch (error) {
        logger(error.message)
    }
}

module.exports = handleDownloadController; 
