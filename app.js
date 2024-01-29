const express = require('express');
const app = express();
const cors = require("cors");
const testRouter = require('./routers/testRouter');
const downloadRouter = require('./routers/downloadRouter');
const getInfoRouter = require('./routers/getInfoRouter');
const verfifyUrlRouter = require('./routers/verifyUrlRouter');
require('dotenv').config();

app.use(cors({ origin: "*" }));
app.use(express.static('videos'));
app.use(express.json());

// routes
app.use('/test', testRouter);
app.use('/verify-url', verfifyUrlRouter);
app.use('/get-info', getInfoRouter);
app.use('/download', downloadRouter);

module.exports = app;
