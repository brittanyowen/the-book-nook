import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBook } from "../services/books";
import Layout from "../layouts/Layout";

function BookDetails(props) {
  const [book, setBook] = useState(null);
  const { id } = useParams(); 

  // useEffect(() => {
  //   if (books.length) {
  //     const oneBook = books.find((book) => book.id === Number(id))
  //     setBook(oneBook)
  //   }
  // }, [books, id])

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData)
    }
    fetchBook()
  }, [])

  return (
    <Layout>
      <div className="book-details">
            <img src={book?.image_url} alt={book?.title} />
            <h3>{book?.title}</h3>
            <h4>{book?.author}</h4>
            <p>{book?.summary}</p>
      </div>
    </Layout>
  );
}

export default BookDetails;
