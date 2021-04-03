import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewEdit(props) {
  const { handleOpen, reviewUpdate, currentUser, reviews } = props;
  const {bookId, id} = useParams();
  const [reviewData, setReviewData] = useState({
    content: "",
    // user_id: currentUser?.id,
    // book_id: Number(params.id),
  });
  const { content } = reviewData;
  useEffect(() => {
    const prefillReviewData = () => {
      const reviewItem = reviews.find((review) => review?.id === Number(id));
      console.log(reviewItem)
      setReviewData({
        content: reviewItem?.content,
        // user_id: reviewItem?.currentUser?.id,
        // book_id: Number(reviewItem?.params?.id),
      });
    };
    if (reviews.length) {
      prefillReviewData();
    }
  }, [reviews, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="review-edit-container" onClick={(e) => handleOpen(false)}>
      <div className="review-edit" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            reviewUpdate(bookId, id, reviewData);
            handleOpen(false)
          }}
        >
          <label>
            Edit Review:
            <input
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => handleOpen(false)}>CANCEL</button>
          <button type="submit">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewEdit;
