import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/api/books";
      const url: string = `${baseUrl}?page=0&size=9`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("something is wrong");
      }

      const responseJson = await response.json();

      console.log(responseJson, "tag1");

      const responseData = responseJson._embedded.books;

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
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error);
    });
  }, []);

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
};
