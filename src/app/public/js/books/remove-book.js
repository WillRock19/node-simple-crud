let tabelaLivros = document.querySelector("#books");
tabelaLivros.addEventListener("click", (evento) => {
	let clickedElement = evento.target;

	if (clickedElement.dataset.type == "remove") {
		let bookId = clickedElement.dataset.ref;
		fetch(`http://localhost:3000/books/${bookId}`, { method: "DELETE" })
			.then((result) => {

				if(result.status != 200){
					alert("An error occured and the register could not be deleted!");
					return;
				}

				let tr = clickedElement.closest(`#book_${bookId}`);
				tr.remove();
			})
			.catch((erro) => console.log(erro));
	}
});
