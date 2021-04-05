import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewEdit(props) {
  const [reviewData, setReviewData] = useState({
    content: "",
  });

  const { content } = reviewData;
  const params = useParams();
  const { handleOpen, reviewUpdate, reviews, book } = props;

  console.log(book?.id, params)

  useEffect(() => {
    const prefillReviewData = () => {
      const reviewItem = reviews.find((review) => review?.id === Number(params.id));
      console.log(reviewItem)
      setReviewData({
        content: reviewItem?.content,
        book_id: reviewItem?.book_id,
        user_id: reviewItem?.user_id
      });
    };
    if (reviews?.length) {
      prefillReviewData();
    }
  }, [reviews, params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="modal-container" onClick={(e) => handleOpen(false)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            reviewUpdate(book?.id, params.id, reviewData);
            handleOpen(false)
          }}
        >
          <label>
            Edit Review:
            <textarea
              type="text"
              rows={10}
              cols={78}
              name="content"
              value={content}
              onChange={handleChange}
            />
          </label>
          <div className="modal-buttons">
          <button className="edit">UPDATE</button>
        <button onClick={() => handleOpen(false)}>CANCEL</button>
          </div>
        </form>
      </div>
      </div>
  );
}

export default ReviewEdit;
