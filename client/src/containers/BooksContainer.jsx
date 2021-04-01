import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Books from "../screens/Books"

import { getAllBooks } from "../services/books"
// import { getAllReviews } from "../services/reviews"


function BooksContainer(props) {
  const [books, setBooks] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData);
    };
    fetchBooks();
  }, []);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const reviewData = await getAllReviews();
  //     setReviews(reviewData);
  //   };
  //   fetchReviews();
  // }, []);

  return (
    <Switch>
      <Route path="/">
        <Books
          books={books}/>
      </Route>
    </Switch>
  );
}

export default BooksContainer;
