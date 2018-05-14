const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const buildPath = require('../config/webpack.config');
const proxy = require('express-http-proxy');

const app = express();

app.use('/', express.static(buildPath.output.path));
app.all('/api/*', proxy('http://54.152.10.51'));

app.listen(port, () => console.log(`Your build code is running at port ${port}`));
