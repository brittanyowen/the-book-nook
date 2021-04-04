import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"


function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <div className="nav-details">
        <div className="tbn-logo">
        <Link to="/">
          <img className="logo" src="https://imgur.com/qeA3rui.png" alt="book spine icon"/>
          <p className="app-name">The<br></br>Book<br></br>Nook</p>
      </Link>
        </div>
        <div className="nav-options">
      {currentUser ? (
        <>
          <p>Hi, {currentUser.username}!</p>
          <Link to="/books/add">Add Book</Link>
          <Link to="/books">Explore</Link>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nav;
