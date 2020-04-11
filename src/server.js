const express = require("express");
const app = express();

app.listen(3000, function () {
	console.log("Server running on port 3000");
});

app.get("/", (request, response) => {
	response.send(`
	<HTML>
			<HEAD>
					<meta charset="utf-8">
			</HEAD>
			<BODY>
					<H1>Subiu!</H1>
			</BODY>
	<HTML>`);
});
