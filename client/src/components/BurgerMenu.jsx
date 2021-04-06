import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Hamburger menu tutorial on You Tube https://www.youtube.com/watch?v=XQCuew98W4k&feature=emb_title
// CSS-Tricks tutorial https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const COLORS = {
  primaryDark: "#707070",
  primaryLight: "#f8edeb",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  margin-right: 20px;
  border-radius: 0%;
  height: 5vh;
  width: auto;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  z-index: 600;
`;

const Icon = styled.span`
  position: relative;
  top: -0.8rem;
  background-color: ${(props) => (props.clicked ? "transparent" : "#03045E")};

  width: 1.75rem;
  height: 1.75px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #03045e;
    width: 1.75rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding-inline-start: 0px;
`;

function BurgerMenu(props) {
  const { currentUser, handleLogout } = props;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
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
        </List>
      </Navigation>
    </>
  );
}

export default BurgerMenu;
