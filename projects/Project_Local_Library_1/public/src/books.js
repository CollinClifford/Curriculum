const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
    ],
  },
  ];

//find()
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//find()
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

const borrowedBooks = [];
const returnedBooks = [];

function helper(books) {
  let borrowedArray = [];
  borrowedArray = books.map(book => {
//    console.log(book.borrows)
    return book.borrows;
  })
  return borrowedArray
}

helper(books)

//helper function
function createBooksArray(books) {
  books.forEach((book) => {
    const bookReturned = book.borrows[0].returned;
    if (bookReturned === true) {
      returnedBooks.push(book);
    } else {
      borrowedBooks.push(book);
    }
    return bookReturned;
  });
}

function partitionBooksByBorrowedStatus(books) {
  createBooksArray(books);
  const allBooksArray = [borrowedBooks, returnedBooks];
  return allBooksArray;
}



// find
function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  const bookBorrows = book.borrows;
  bookBorrows.forEach((book) => {
    const bookObject = accounts.find((account) => account.id === book.id);
    bookObject["returned"] = book.returned;
    borrowers.push(bookObject);
  });
  borrowers.length = 10;
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
