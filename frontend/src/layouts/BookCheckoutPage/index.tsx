import { useEffect, useState } from "react";

import { SpinnerLoading } from "../Utils/SpinnerLoading";

import BookModel from "../../models/BookModel";
import { useParams } from "react-router-dom";
import { StarsReview } from "../Utils/StarsReview";
import { CheckoutAndReviewBox } from "./components/CheckoutAndReviewBox";

interface checkout {
  bookId: string;
}

export const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const { bookId } = useParams<checkout>();

  // const bookId = window.location.pathname.split("/")[2];
  // console.log(bookId);

  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

      const response = await fetch(baseUrl);
      console.log(baseUrl);

      if (!response.ok) {
        throw new Error("something is wrong");
      }

      const responseJson = await response.json();

      // console.log(responseJson, "tag1");

      const responseData = responseJson;

      // console.log(responseData, "tag2");

      const loadedBook: BookModel = {
        id: responseData.id,
        title: responseData.title,
        author: responseData.author,
        description: responseData.description,
        copies: responseData.copies,
        copiesAvailable: responseData.copiesAvailable,
        category: responseData.category,
        img: responseData.img,
      };
      console.log(loadedBook);
      setBook(loadedBook);
      setIsLoading(false);
    };
    fetchBook().catch((error: any) => {
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

  return (
    <div>
      <div className="container d-none d-lg-block">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-2">
            {book?.img ? <img src={book?.img} width={226} height={349} alt="book" /> : <img src={require("../../Images/BooksImages/book-luv2code-1000.png")} width={226} height={349} alt="book" />}
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-2">
              <h2>{book?.title}</h2>
              <h5 className="text-primary">{book?.author}</h5>
              <p className="lead">{book?.description}</p>
              <StarsReview rating={3.5} size={32} />
            </div>
          </div>
          <CheckoutAndReviewBox book={book} mobile={false} />
        </div>
        <hr></hr>
      </div>
      <div className="container d-lg-none mt-5">
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          {book?.img ? <img src={book?.img} width={226} height={349} alt="book" /> : <img src={require("../../Images/BooksImages/book-luv2code-1000.png")} width={226} height={349} alt="book" />}
        </div>
        <div className="mt-4">
          <div className="ml-2">
            <h2>{book?.title}</h2>
            <h5 className="text-primary">{book?.author}</h5>
            <p className="lead">{book?.description}</p>
            <StarsReview rating={3.5} size={32} />
          </div>
          <CheckoutAndReviewBox book={book} mobile={true} />
        </div>

        <hr />
      </div>
      {/* <hr></hr> */}
    </div>
  );
};
