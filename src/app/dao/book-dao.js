class BookDao {
	constructor(db) {
		this._db = db;
	}

	getBooks() {
		return new Promise((resolve, reject) => {
			this._db.all("SELECT * FROM books", (error, result) => {
				if(error)
					return reject("An error occured while accessing the database!");

				return resolve(result);
			});
		});
	}
}

module.exports = BookDao;
