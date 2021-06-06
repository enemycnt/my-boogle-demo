import { useEffect, useState } from "react";
import { Book } from "../../shared/types";
import {ErrorMessage, Loading} from "../../shared/styles";
import {
  AppWrapper,
  BookDetailedWrap,
  BookTitle,
  Details,
  DetailsTop,
  DetailsProps,
  DetailsImgWrapping,
  Genres,
} from "./styles";
import { useParams } from "react-router-dom";
type BookDetailedProps = {
  key: string;
};

type BookDetailed = {
  title: string;
  coverNumber?: number;
  genres?: Array<string>;
  numberOfPages?: number;
  firstPublishedYear?: string;
  lastPublishedYear?: string;
};

const BookDetailedPage = (props: any) => {
  const bookFromSearch: Book = props.location.state.book;
  const { key }: BookDetailedProps = useParams();
  const bookKey = `OLID:${key}`;
  const [isLoading, setLoading] = useState(false);
  const [errMessage, setErrorMessage] = useState(null);
  const [book, setBook] = useState<BookDetailed>();

  useEffect(() => {
    setLoading(true);
    fetch(
      `//openlibrary.org/api/books?bibkeys=OLID:${key}&jscmd=data&format=json`
    ).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((result) => {
        const _book = result[bookKey];
        const bookDetailed: BookDetailed = {
          title: bookFromSearch.bookName,
          coverNumber: bookFromSearch.coverNumber,
          genres: _book.subjects?.map((el: any) => el.name),
          numberOfPages: _book.number_of_pages,
          firstPublishedYear: bookFromSearch.firstPublishedYear,
          lastPublishedYear: bookFromSearch.lastPublishedYear,
        };
        setBook(bookDetailed);
        setLoading(false);
      })
      .catch((errMessage) => {
        console.log(errMessage);
        setErrorMessage(errMessage.toString());
      });
  }, [bookFromSearch, bookKey, key]);

  if (errMessage) {
    return <ErrorMessage>{errMessage}</ErrorMessage>;
  }

  return (
    <AppWrapper>
      <BookDetailedWrap>
        {isLoading && <Loading>Loading ...</Loading>}
        {book && (
          <>
            <Details>
              <DetailsTop>
                <DetailsImgWrapping>
                  {book.coverNumber ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.coverNumber}-M.jpg`}
                      alt="book cover"
                    />
                  ) : <div>No image :(</div>}
                </DetailsImgWrapping>
                <DetailsProps>
                  <BookTitle>{book.title}</BookTitle>
                  {book.numberOfPages && (
                    <div>Number of pages: {book.numberOfPages}</div>
                  )}
                  {book.firstPublishedYear && (
                    <div>First publish year: {book.firstPublishedYear}</div>
                  )}
                  {book.lastPublishedYear && (
                    <div>Last publish year: {book.lastPublishedYear}</div>
                  )}
                </DetailsProps>
              </DetailsTop>
              <Genres><b>Genres:</b> {book.genres?.join(", ")}</Genres>
            </Details>
          </>
        )}
      </BookDetailedWrap>
    </AppWrapper>
  );
};

export default BookDetailedPage;
