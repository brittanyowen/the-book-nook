import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Books from "../screens/Books";
import BookDetails from "../screens/BookDetails";
import BookCreate from "../screens/BookCreate";
import BookEdit from "../screens/BookEdit";
import Search from "../components/Search";

import { getAllBooks, postBook, putBook, destroyBook } from "../services/books";

function BooksContainer(props) {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData);
      setSearchResults(bookData);
    };
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const query = books.filter((book) => {
      return book.title.toLowerCase().includes(e.target.value.toLowerCase()) || book.author.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setSearchResults(query);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks((prevState) => [...prevState, newBook]);
    history.push("/books");
  };

  const handleUpdate = async (id, bookData) => {
    const updatedBook = await putBook(id, bookData);
    setBooks((prevState) =>
      prevState.map((book) => {
        return book.id === Number(id) ? updatedBook : book;
      })
    );
    history.push("/books");
  };

  const handleDelete = async (id) => {
    await destroyBook(id);
    setBooks((prevState) => prevState.filter((book) => book.id !== id));
    history.push("/books");
  };

  const booksJSX = searchResults.map((book, index) => 
    <Books
      key={index}
      id={book.id}
      title={book.title}
      image_url={book.image_url}
      currentUser={currentUser}
    />
  );

  return (
    <Switch>
      <Route path="/books/add">
        <BookCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/books/:id/edit">
        <BookEdit books={books} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/books/:id">
        <BookDetails
          books={books}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path="/">
        <Search onSubmit={handleSubmit} onChange={handleSearch}/>
        <div className="books">{booksJSX}</div>
      </Route>
    </Switch>
  );
}

export default BooksContainer;
