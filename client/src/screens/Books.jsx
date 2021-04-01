import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Books(props) {
  const { books, currentUser } = props;
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {currentUser ? (
            <Link to={`/books/${book.id}`}>
              <Card title={book.title} image={book.image_url} />
            </Link>
          ) : (
            <Card title={book.title} image={book.image_url} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Books;
