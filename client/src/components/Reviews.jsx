import React from 'react';

function Reviews(props) {
  const { reviews } = props; 
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h6>{review.user?.username}</h6>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;