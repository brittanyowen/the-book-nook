import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneBook } from "../services/books";

function BookDetails(props) {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const {currentUser, handleDelete} = props

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
        <h3>{book?.title}</h3>
        <h4>by {book?.author}</h4>
        <p>{book?.summary}</p>
      </div>
      {currentUser?.id === book?.user_id && (
        <>
          <Link to={`/books/${id}/edit`}>
            <button>EDIT</button>
          </Link>
          <button onClick={() => handleDelete(book.id)}>DELETE</button>
        </>
      )}

      <div>Reviews!</div>
      </>
  );
}

export default BookDetails;
