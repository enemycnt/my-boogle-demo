import React, {useState} from 'react';
import { Main, AppWrapper } from "./styles";

import SearchForm from '../SearchForm'
import BooksList from '../BooksList'

const MainApp = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errMessage, setErrorMessage] = useState(null);
  const [searchStr, setSearchStr] = useState('')

  const handleSubmit = (e:  React.FormEvent) => {
    e.preventDefault()
    getResult(searchStr)
  }

  const getResult = (searchString: string) => {
    setLoading(true);
    const escapedSearchString = encodeURIComponent(searchString);
    const url = `//openlibrary.org/search.json?q=${escapedSearchString}`;
    fetch(url)
      .then((response) => {
        if(response.ok)
        {
          return response.json();         
        }
        throw new Error(response.statusText);
      })
      .then((result) => {
        const filterBooks = result.docs.map((book: any) => ({
          key: book.key,
          authorName: book.author_name?.[0],
          bookName: book.title,
          coverNumber: book.cover_i,
          firstPublishedYear: book.first_publish_year,
          lastPublishedYear: book.publish_year?.sort((a: number, b: number) => a + b)[0],
          isbn: book.isbn?.[0],
          editionKey: book.edition_key?.[0],
          numberOfPages: book.number_of_pages?.[0]
        }));
        setBooks(filterBooks);
        setLoading(false);
      }).catch((errMessage) => {
        console.log(errMessage);
        setErrorMessage(errMessage.toString());
      });
  };
  return (
    <AppWrapper>
      <Main>
        <SearchForm handleSubmit={handleSubmit} setSearchStr={setSearchStr} searchStr={searchStr} isLoading={isLoading} />
        <BooksList books={books} isLoading={isLoading} errMessage={errMessage} />
      </Main>
    </AppWrapper>
  );
}

export default MainApp;