const BookDao = require("../dao/book-dao");
const db = require("../../config/database");

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
		const bookDao = new BookDao(db);
		bookDao
			.getAll()
			.then((books) =>
				response.marko(require("../views/books"), {
					books: books,
				})
			)
			.catch((error) => console.log(error));
	});

	app.get("/books/form", (request, response) => {
		response.marko(require("../views/books/form/book-form.marko"), {book: {}});
	});

	app.get("/books/form/:id", (request, response) => {
		const bookDao = new BookDao(db);
		bookDao
			.getById(request.params.id)
			.then((book) =>
				response.marko(require("../views/books/form/book-form.marko"), {
					book: book,
				})
			)
			.catch((error) => console.log(error));
	});

	app.post("/books/form", (request, response) => {
		const bookDao = new BookDao(db);
		bookDao
			.add(request.body)
			.then(response.redirect("/books"))
			.catch((error) => console.log(error));
	});

	app.put("/books/form", (request, response) => {
		const bookDao = new BookDao(db);
		bookDao
			.update(request.body)
			.then(response.redirect("/books"))
			.catch((error) => console.log(error));
	});

	app.delete("/books/:id", (request, response) => {
		const bookDao = new BookDao(db);
		bookDao
			.remove(request.params.id)
			.then(() => response.send(200).end())
			.catch((error) => console.log(error));
	});
};
