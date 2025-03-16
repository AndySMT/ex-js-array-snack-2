//* Snack 5 (Bonus) - Raccogli i libri
/* Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] . */

function getBooks(arrId) {
  return Promise.all(
    arrId.map((id) => {
      return fetch(
        `https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`
      ).then((res) => {
        if (!res.ok) throw new Error("Errore chiamata");
        return res.json();
      });
    })
  );
}

getBooks([2, 13, 7, 21, 19])
  .then((books) => {
    console.log("books:", books);
    const areThereAvailableBooks = books.some((book) => book.available);
    console.log(areThereAvailableBooks);
  })
  .catch((error) => {
    console.error("Errore:", error);
  });

//* Snack 6 (Bonus) - Ordina i libri
/* Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array. */

/* const areThereAvailableBooks = books.some((book) => book.available);
console.log(areThereAvailableBooks); */
