require("marko/node-require");
require("marko/express");

const express = require("express");
const routes = require("./../app/routes/routes");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use("/static", express.static("src/app/public"));

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(
	methodOverride(function (request) {
		if (request.body && typeof request.body === "object" && "_method" in request.body) {
			const method = request.body._method;
			delete request.body._method;
			return method;
		}
	})
);
routes(app);

module.exports = app;
