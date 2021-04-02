import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    image_url: "",
  });
  const { title, author, summary, image_url } = formData;
  const { id } = useParams();
  const { books, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const bookItem = books.find((book) => book.id === Number(id));
      setFormData({
        title: bookItem.title,
        author: bookItem.author,
        summary: bookItem.summary,
        image_url: bookItem.image_url
      });
    };
    if (books.length) {
      prefillFormData();
    }
  }, [books, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(formData);
        }}
      >
        <h3>Edit</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Summary:
          <input
            type="text"
            name="summary"
            value={summary}
            onChange={handleChange}
          />
        </label>
        <button>SAVE</button>
      </form>
    </>
  );
}

export default BookEdit;
