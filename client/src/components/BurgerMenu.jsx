import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Hamburger menu tutorial on You Tube https://www.youtube.com/watch?v=XQCuew98W4k&feature=emb_title
// CSS-Tricks tutorial https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const COLORS = {
  primaryDark: '#707070',
  primaryLight: '#f8edeb',
}

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 0.4rem;
  right: .4rem;
  border-radius: 0%;
  height: 2.5rem;
  width: 2.5rem;
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
  top: -.4rem;
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
  position: absolute;
  list-style: none;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding-inline-start: 0px;
`;

// const ItemLink = styled(NavLink)`
//   display: inline-block;
//   font-size: 3rem;
//   font-weight: 300;
//   text-decoration: none;
//   color: ${COLORS.primaryLight};
//   padding: 1rem 2rem;
//   background-image: linear-gradient(
//     120deg,
//     transparent 0%,
//     transparent 50%,
//     #fff 50%
//     );
//     background-size: 240%;
//     transition: all 0.4s;
//     &:hover,
//     &:active {
//       background-position: 100%;
//       color: ${COLORS.primaryLight};
//       transform: translateX(1rem);
//     }
//     `;


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
