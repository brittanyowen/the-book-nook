import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <nav>
        <p>The Book Nook</p>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <div>{props.children}</div>
      <footer></footer>
    </div>
  );
}

export default Layout;
