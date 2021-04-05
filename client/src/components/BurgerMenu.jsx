import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//hamburger menu tutorial https://www.youtube.com/watch?v=XQCuew98W4k&feature=emb_title






function BurgerMenu(props) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div>
      BurgerMenu
    </div>
  );
}

export default BurgerMenu;