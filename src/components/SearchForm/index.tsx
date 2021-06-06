import React from 'react';

import {SearchForm, TextField, SearchButton} from './styles'

type SearchProps = {
  handleSubmit: (e: React.FormEvent) => void,
  setSearchStr: (text: string) => void,
  searchStr: string,
  isLoading: boolean
}

const Search = ({handleSubmit, setSearchStr, searchStr, isLoading}: SearchProps) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <TextField
        placeholder="Name of the book ..."
        type="text"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        autoFocus
      />
      <SearchButton disabled={isLoading}>🔍</SearchButton>
    </SearchForm>
  );
};

export default Search;