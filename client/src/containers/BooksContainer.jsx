import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Books from "../screens/Books"
import BookDetails from "../screens/BookDetails"

import { getAllBooks, postBook, putBook } from "../services/books"
import { getAllReviews } from "../services/reviews"


function BooksContainer(props) {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { currentUser } = props

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getAllReviews();
      setReviews(reviewData);
    };
    fetchReviews();
  }, []);

  // const handleCreate = async (bookData) => {
  //   const newBook = await postBook(bookData);
  //   setBooks(prevState => [...prevState, newBook])
  //   history.push('/books')
  // }

  // const handleUpdate = async (id, bookData) => {
  //   const updatedBook = await putBook(id, bookData)
  //   setBooks(prevState => prevState.map(food => {
  //     return bookData.id === Number(id) ? updatedBook : book
  //   }))
  //   history.push('/books')
  // }

  // const handleDelete = async (id) => {
  //   await destroyBook(id);
  //   setBooks(prevState => prevState.filter(book => book.id !== id))
  // }

  return (
    <Switch>
        <Route path="/books/:id">
          <BookDetails
            books={books}
          />
        </Route>
      <Route path="/">
        <Books
          books={books}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  );
}

export default BooksContainer;
