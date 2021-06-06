import { Link } from "react-router-dom";
import { Book } from "../../shared/types";
import { ErrorMessage, Loading } from "../../shared/styles";

import {
  List,
  ListItem,
  BookName,
  AuthorName,
  YearPublished,
  NoResult,
} from "./styles";

type BookListProps = {
  books: any;
  isLoading: boolean;
  errMessage: string | null;
};

const BooksList = ({ books, isLoading, errMessage }: BookListProps) => {
  if (errMessage) {
    return <ErrorMessage>{errMessage}</ErrorMessage>;
  }

  return isLoading ? (
    <Loading>Loading...</Loading>
  ) : books.length > 0 ? (
    <List>
      {books.map((book: Book) => (
        <ListItem key={book.key}>
          <Link
            to={{
              pathname:`/book/${book.editionKey}`,
              state: { book },
            }}
          >
            <BookName>{book.bookName}</BookName>
            <AuthorName>{book.authorName ? book.authorName : null}</AuthorName>
            <YearPublished>{book.firstPublishedYear}</YearPublished>
          </Link>
        </ListItem>
      ))}
    </List>
  ) : (
    <NoResult>No result</NoResult>
  );
};

export default BooksList;
