import React from 'react';
import {Link} from "react-router-dom"

function Books(props) {
  const { books, currentUser } = props
  return (
    <div>
      <p>Books!</p>
      {books.map((book) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>
            <img src={book.image_url} alt="cover art"/>
            <p>{book.title}</p>
          </Link>
          {currentUser?.id === book.user_id && (
            <>
              <Link to={`/books/${book.id}/edit`}>
                <button>Edit</button>
              </Link>
              </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Books;