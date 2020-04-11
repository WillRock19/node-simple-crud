class BookDao {
	constructor(db) {
		this._db = db;
	}

	getBooks(callback) {
		this._db.all("SELECT * FROM books", (error, result) =>
			callback(error, result)
		);
	}
}

module.exports = BookDao;
