import { useState } from "react";

function BookCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    image_url: "",
  });
  const { title, author, summary, image_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Add A Book</h3>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
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
        <textarea
          rows={10}
          cols={78}
          type="text"
          name="summary"
          value={summary}
          onChange={handleChange}
        />
      </label>
      <button>SAVE</button>
    </form>
  );
}

export default BookCreate;
