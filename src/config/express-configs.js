require("marko/node-require");
require("marko/express");
const express = require("express");
const routes = require("./../app/routes/routes");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended: true
}));

routes(app);

module.exports = app;
