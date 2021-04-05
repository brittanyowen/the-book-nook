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
          <div>
            <h5>{book?.title}</h5>
            <h4>by {book?.author}</h4>
            <br></br>
            <p>{book?.summary}</p>
          </div>
          {currentUser?.id === book?.user_id && (
            <div className="details-buttons">
              <Link to={`/books/${id}/edit`}>
                <button className="edit">EDIT</button>
              </Link>
              <button onClick={() => handleDelete(book.id)}>DELETE</button>
            </div>
          )}
        </div>
      </div>
      <ReviewsContainer book={book} id={id} currentUser={currentUser} />
      <br></br>
      <br></br>
    </>
  );
}

export default BookDetails;
