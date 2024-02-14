console.log("************** DELIVERABLE 04 *********************");

function isBookRead(books: Book[], titleToSearch: string): boolean {
  if (!Array.isArray(books) || books.length === 0) {
    return false;
  }

  const searchResult = books.find((book) => book.title === titleToSearch);

  return searchResult?.isRead ?? false;
}

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
