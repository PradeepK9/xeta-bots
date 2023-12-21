/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={'https://img1.wsimg.com/isteam/ip/46553803-0536-4d55-bf5a-a9ac902b87c1/blob-3a56b97.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95'} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="/">Technologies</a>
          <a href="/">About</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <MenuIcon color="disabled" fontSize="large" />
      </button>
    </header>
  );
}
