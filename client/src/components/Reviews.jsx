import React, {useState} from 'react';
import { Link, Route } from "react-router-dom"
import ReviewEdit from "./ReviewEdit"

function Reviews(props) {
  const [open, handleOpen] = useState(false)
  const { reviews, currentUser, reviewUpdate, reviewDelete, book } = props;
  console.log(reviews)
  console.log(book)
  return (
    <div>
      {reviews.map((review) => (
        <div className="review" key={review?.id}>
          <div>
          <h6>{review?.user_id === currentUser?.id ? currentUser?.username : review?.user?.username}</h6>
          {currentUser?.id === review?.user_id && (
            <div>
            <Link to={`/books/${book?.id}/reviews/${review?.id}`}>
              <button className="edit" onClick={() => handleOpen(review?.id)}>EDIT</button>
            </Link>
              <button onClick={() => reviewDelete(book?.id, review?.id)}>DELETE</button>
              </div>
            )}
            </div>
          <p>{review?.content}</p>
        </div>
      ))}
      {open && (
        <Route path="/books/:book_id/reviews/:id">
          <ReviewEdit
            book={book}
            reviews={reviews}
            handleOpen={handleOpen}
            reviewUpdate={reviewUpdate}
          />
        </Route>
      )}
    </div>
  );
}

export default Reviews;