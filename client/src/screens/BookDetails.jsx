import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneBook } from "../services/books";

import ReviewsContainer from "../containers/ReviewsContainer";

function BookDetails(props) {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
    };
    fetchBook();
  }, []);

  return (
    <>
      <div className="book-details">
        <img src={book?.image_url} alt={book?.title} />
        <div className="book-details2">
          <h3>{book?.title}</h3>
          <h4>by {book?.author}</h4>
          <br />
          <p>{book?.summary}</p>
          {currentUser?.id === book?.user_id && (
            <div className="details-buttons">
              <Link to={`/books/${id}/edit`}>
                <button>EDIT</button>
              </Link>
              <button onClick={() => handleDelete(book.id)}>DELETE</button>
            </div>
          )}
        </div>
      </div>
      <ReviewsContainer book={book} id={id} currentUser={currentUser} />
    </>
  );
}

export default BookDetails;
