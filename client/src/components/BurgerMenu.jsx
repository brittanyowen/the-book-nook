import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//hamburger menu tutorial https://www.youtube.com/watch?v=XQCuew98W4k&feature=emb_title

function BurgerMenu(props) {
  const { currentUser, handleLogout } = props;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="nav-options">
        {currentUser ? (
          <>
            <p>Hi, {currentUser.username}!</p>
            <div className="options">
              <Link to="/books/add">Add Book</Link>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </>
  );
}

export default BurgerMenu;
