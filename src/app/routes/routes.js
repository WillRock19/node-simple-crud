module.exports = (app) => {
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

	app.get("/books", (request, response) => {
		response.marko(
			require("../views/books"),
			{
				books: [
					{
						id: 1,
						title: "Fundamentos do Node"
					},
					{
						id: 2,
						title: "Fundamentos de Scala"
					}
				]
			}
		);
	});
};
