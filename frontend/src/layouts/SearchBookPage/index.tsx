import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";
import { FilterBar } from "./components/FilterBar";
import { Pagination } from "../Utils/Pagination";

export const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage] = useState(5);
  const [totalAmountsOfBook, setTotalAmountsOfBook] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/api/books";
      const url: string = `${baseUrl}?page=${currentPage - 1}&size=${bookPerPage}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("something is wrong");
      }

      const responseJson = await response.json();

      console.log(responseJson, "tag1");

      const responseData = responseJson._embedded.books;
      setTotalAmountsOfBook(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);

      const loadedBooks: BookModel[] = [];

      for (let key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailale,
          img: responseData[key].img,
        });
      }
      setIsLoading(false);
      setBooks(loadedBooks);
      window.scrollTo(0, 0);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error);
    });
  }, [currentPage]);

  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const indexOfLastBook: number = currentPage * bookPerPage;
  const indexOfFirstBook: number = indexOfLastBook - bookPerPage;
  let lastItem: number = indexOfLastBook <= totalAmountsOfBook ? indexOfLastBook : totalAmountsOfBook;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div>
          <FilterBar />
          <div className="mt-3">
            <h5>Number of results: ({totalAmountsOfBook})</h5>
          </div>
          <p>
            {indexOfFirstBook + 1} to {lastItem} of {totalAmountsOfBook} items:{" "}
          </p>
          {books.map((book) => (
            <SearchBook book={book} key={book.id} />
          ))}
          {totalPages > 1 && <Pagination currentPage={currentPage} totalPage={totalPages} paginate={paginate} />}
        </div>
      </div>
    </div>
  );
};
