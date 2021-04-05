import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom"; 
import ReviewCreate from "../components/ReviewCreate"
import Reviews from "../components/Reviews"
import { getAllReviews, destroyReview, putReview, postReview } from '../services/reviews';

function ReviewsContainer(props) {
  const { book, id, currentUser } = props;
  const [reviews, setReviews] = useState([])
  // const history = useHistory(); 

  useEffect(() => {
    const fetchReviews = async (bookId) => {
      const reviewData = await getAllReviews(bookId);
      setReviews(reviewData);
    };
    fetchReviews(id);
  }, []);

  const reviewCreate = async (bookId, reviewData) => {
    const newReview = await postReview(bookId, reviewData);
    setReviews((prevState) => [...prevState, newReview]);
  };

  const reviewUpdate = async (bookId, id, reviewData) => {
    const updatedReview = await putReview(bookId, id, reviewData)
    setReviews(prevState => prevState.map(review => {
      return review.id === Number(id) ? updatedReview : review
    }))
  }

  const reviewDelete = async (bookId, id) => {
    await destroyReview(bookId, id);
    setReviews(prevState => prevState.filter(review => review.id !== id))
  }

  return (
    <div className="reviews-container">
      <ReviewCreate book={book} reviews={reviews} reviewCreate={reviewCreate} currentUser={currentUser}/>
      <Reviews book={book} reviews={reviews} currentUser={currentUser} reviewUpdate={reviewUpdate} reviewDelete={reviewDelete} />
      
    </div>
  );
}

export default ReviewsContainer;