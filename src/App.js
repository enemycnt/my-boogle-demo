import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const URL = 'http://openlibrary.org/search.json?q=the+lord+of+the+rings'

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchStr, setSearchStr] = useState('')

  // const [isModalShowed, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)


  const showModal = (book) => {
    setSelectedBook(book)
    showModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // useEffect(() =>{
    const getResult = (searchString) => {
      setLoading(true)
      const escapedSearchString = encodeURIComponent(searchString)
      const url = `http://openlibrary.org/search.json?q=${escapedSearchString}`      
      fetch(url).then(res => res.json()).then(result => {
        console.log(result)
        const filterBooks = result.docs.map((book)  => ({
          authorName: book.author_name?.[0],
          bookName: book.title,
          firstPublishedYear: book.first_published_year
        }))
        setBooks(filterBooks)
        console.log(filterBooks)
        setLoading(false)
      })
    }
    // getResult(URL)
  // },[])



  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchStr} onChange={(e) =>setSearchStr(e.target.value) }/>
          <button onClick={(e) => getResult(searchStr)}>Search</button>
        </form>
        {selectedBook ? <Modal book={selectedBook} /> : null}
        {isLoading ? <div>Loading...</div> : <ul>
          {books.map(book => (
            <li key={book.bookName} onClick={() => setSelectedBook(book)}> Author Name: {book.authorName} </li>
            
          ))}
        </ul>}
      </header>
    </div>
  );
}

const Modal = ({book}) => {
  return(
    <div className="modal-wrap">
      <div className="modal">
        <div>
          {book.bookName}
        </div>
        
      </div>
    </div>
  )
}

export default App;
