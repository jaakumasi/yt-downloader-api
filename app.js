const express = require('express');
const app = express();
const cors = require("cors");
const testRouter = require('./routers/testRouter');
const downloadRouter = require('./routers/downloadRouter');
require('dotenv').config();

app.use(cors({ origin: "*" }));
app.use(express.json());

// routes
app.use('/test', testRouter);
app.use('/download', downloadRouter);

module.exports = app;
