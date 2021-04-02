import React from 'react';
import {Link} from "react-router-dom"

function Reviews(props) {
  const { reviews, currentUser, reviewUpdate, reviewDelete, book } = props; 
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h6>{review.user?.username}</h6>
          <p>{review.content}</p>
          {currentUser?.id === review?.user_id && (
            <>
            <Link to={`book/${book?.id}/reviews/${review.id}`}>
              <button onClick={reviewUpdate}>EDIT</button>
            </Link>
              <button onClick={() => reviewDelete(book?.id, review.id)}>DELETE</button>
              </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Reviews;