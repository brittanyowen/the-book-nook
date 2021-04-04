import React from "react";
import Nav from "../components/Nav";
// import Footer from "../components/Footer"

function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <div className="children">
      {props.children}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
