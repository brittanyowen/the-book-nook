import { useState } from "react";
import {useParams} from "react-router-dom"

function ReviewCreate(props) {
  const { book, reviewCreate, currentUser } = props;
  const params = useParams();
  const [reviewData, setReviewData] = useState({
    content: "",
    user_id: currentUser?.id,
    book_id: Number(params.id),
  });
  const { content } = reviewData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        reviewCreate(params.id, reviewData);
      }}
    >
      <label>
        What did you think of {book?.title}?
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>POST</button>
    </form>
  );
}

export default ReviewCreate;
