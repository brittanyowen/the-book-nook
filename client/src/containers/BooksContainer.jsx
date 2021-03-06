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
  const [toggleFetch, setToggleFetch] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData);
      setSearchResults(bookData);
    };
    fetchBooks();
  }, [toggleFetch]);

  const handleSearch = (e) => {
    const query = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchResults(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleFetch((curr) => !curr)
    
  };
  
  const handleCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks((prevState) => [...prevState, newBook]);
    setToggleFetch((curr) => !curr)

    history.push("/");
  };

  const handleUpdate = async (id, bookData) => {
    const updatedBook = await putBook(id, bookData);
    setBooks((prevState) =>
      prevState.map((book) => {
        return book.id === Number(id) ? updatedBook : book;
      })
    );
    setToggleFetch((curr) => !curr)
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyBook(id);
    setBooks((prevState) => prevState.filter((book) => book.id !== id));
    setToggleFetch((curr) => !curr)
    history.push("/");
  };

  const booksJSX = searchResults.map((book, index) => (
    <Books
      key={index}
      id={book.id}
      title={book.title}
      image_url={book.image_url}
      currentUser={currentUser}
    />
  ));

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
        <p className="tagline2">Find your next favorite book</p>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <div className="books">{booksJSX}</div>
      </Route>
    </Switch>
  );
}

export default BooksContainer;
