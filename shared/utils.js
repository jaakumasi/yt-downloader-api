const logger = (msg) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(msg);
    }
}

module.exports = { logger }