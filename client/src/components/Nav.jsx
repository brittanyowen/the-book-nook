import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"


function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <div className="nav-details">
      <Link to="/">
        <p>The Book Nook</p>
      </Link>
      {currentUser ? (
        <>
          <p>Hi, {currentUser.username}!</p>
          <Link to="/books/add">Add Book</Link>
          <Link to="/books">Explore</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Nav;
