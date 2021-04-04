import React, {useState} from 'react';
import { Link } from "react-router-dom"
import ReviewEdit from "./ReviewEdit"

function Reviews(props) {
  const [open, handleOpen] = useState(false)
  const { reviews, currentUser, reviewUpdate, reviewDelete, book } = props; 
  return (
    <div>
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <div>
          <h6>{review.user?.username}</h6>
          {currentUser?.id === review?.user_id && (
            <div>
            <Link to={`/books/${book?.id}/reviews/${review.id}`}>
              <button className="edit" onClick={() => handleOpen(review.id)}>EDIT</button>
            </Link>
              <button onClick={() => reviewDelete(book?.id, review.id)}>DELETE</button>
              </div>
            )}
            </div>
          <p>{review.content}</p>
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