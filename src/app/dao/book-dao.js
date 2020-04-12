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
}

module.exports = BookDao;
