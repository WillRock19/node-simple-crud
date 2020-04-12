class BookDao {
	constructor(db) {
		this._db = db;
	}

	remove(id) {
		return new Promise((resolve, reject) => {
			this._db.run("DELETE FROM books WHERE id = ?", id, (error, result) => {
				if (error)
					return reject(
						"An error occured while trying to add a book to the database!"
					);

				return resolve(result);
			});
		});
	}

	add(book) {
		return new Promise((resolve, reject) => {
			this._db.run(
				`INSERT INTO books (
				title,
				price,
				description
			) values(?, ?, ?)`,
				[book.title, book.price, book.description],
				(error, result) => {
					if (error)
						return reject(
							"An error occured while trying to add a book to the database!"
						);
					console.log("Livro obtido: ", result);
					return resolve(result);
				}
			);
		});
	}

	update(book) {

		console.log(book);
		console.log(book.description);

		return new Promise((resolve, reject) => {
			this._db.run(
				`UPDATE books
					SET title = ?,
							price = ?,
							description = ?
					WHERE id = ?`,
				[book.title, book.price, book.description, book.id],
				(error, result) => {
					if (error)
						return reject(
							"An error occured while trying to update a book to the database!"
						);

					return resolve(result);
				}
			);
		});
	}

	getAll() {
		return new Promise((resolve, reject) => {
			this._db.all("SELECT * FROM books", (error, result) => {
				if (error)
					return reject("An error occured while accessing the database!");

				return resolve(result);
			});
		});
	}

	getById(id) {
		return new Promise((resolve, reject) => {
			this._db.get("SELECT * FROM books WHERE id = ?", id, (error, result) => {
				if (error)
					return reject("An error occured while accessing the database!");

				return resolve(result);
			});
		});
	}
}

module.exports = BookDao;
