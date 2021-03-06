import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Books(props) {
  const { id, title, image_url, currentUser } = props;
  return (
    <div className="book">
      {currentUser ? (
        <Link to={`/books/${id}`}>
          <Card title={title} image={image_url} />
        </Link>
      ) : (
          <Link to="/login">
            <Card title={title} image={image_url} />
          </Link>
      )}
    </div>
  );
}

export default Books;
