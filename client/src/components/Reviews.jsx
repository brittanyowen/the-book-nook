import React, {useState} from 'react';
import { Link } from "react-router-dom"
import ReviewEdit from "./ReviewEdit"

function Reviews(props) {
  const [open, handleOpen] = useState(false)
  const { reviews, currentUser, reviewUpdate, reviewDelete, book } = props; 
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h6>{review.user?.username}</h6>
          <p>{review.content}</p>
          {currentUser?.id === review?.user_id && (
            <>
            <Link to={`/books/${book?.id}/reviews/${review.id}`}>
              <button onClick={() => handleOpen(review.id)}>EDIT</button>
            </Link>
              <button onClick={() => reviewDelete(book?.id, review.id)}>DELETE</button>
              </>
          )}
        </div>
      ))}
      {open && (
        <ReviewEdit
          // open={open}
          handleOpen={handleOpen}
          reviewUpdate={reviewUpdate}
          book={book}
          currentUser={currentUser}
          reviews={reviews}
        />
      )}
    </div>
  );
}

export default Reviews;