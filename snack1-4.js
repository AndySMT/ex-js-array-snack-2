const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

//* Snack 1 - Filtra e Modifica
/* Crea una funzione che somma due numeri.
Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console. */

function somma(a, b) {
  return a + b;
}

const longBooks = books.reduce((acc, curr) => {
  if (curr.pages > 300) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(longBooks);

const longBooksTitle = longBooks.map((e) => {
  return e.title;
});
console.log(longBooksTitle);

//* Snack 2 - Il primo libro scontato
/* Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi). */

const availableBooks = books.filter((e) => {
  return e.available;
});
console.log(availableBooks);

/* const discountedBooks = availableBooks.map((e) => {
  return (parseFloat(e.price) * 0.8).toFixed(2);
});
console.log(discountedBooks); */

const discountedBooks = availableBooks.map((e) => {
  const prezzoScontato = (parseFloat(e.price) * 0.8).toFixed(2);
  return { ...e, price: `${prezzoScontato}€` }; //correzione, mancava l oggetto, io avevo solo i prezzi
});
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find((e) => {
  return parseFloat(e.price) % 1 === 0; //non va piu bene solo e % 1 === 0 perche adesso discount e un obj non piu un numero, quindi estraggo e.priece di nuovo
});
console.log(fullPricedBook);

//* Snack 3 - Ordinare gli Autori
/* Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */

const author = books.map((e) => {
  return e.author;
});
console.log(author);

const areAuthorsAdults = author.every((e) => {
  return e.age > 18;
});
console.log(areAuthorsAdults);

author.sort((a, b) => {
  return areAuthorsAdults ? a.age - b.age : b.age - a.age;
});

//* Snack 4 - Calcola l’età media
/* Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri. */

const ages = books.reduce((acc, curr) => {
  return curr.author.age + acc;
}, 0);
console.log(ages);
console.log(ages / books.length);
