import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import {
  Content, Logo, NavBar, Wrapper,
} from './Header.styles';

const Header = () => {
  const [scrolled, setScrolled] = useState();
  const location = useLocation();

  useEffect(() => {
    function checkScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [scrolled]);

  return (
    <Wrapper scrolled={scrolled}>
      <Content home={location.pathname === '/'}>
        <Logo />
        <NavBar>
          <Link to="/dashboard">Home</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">LogIn</Link>

          <Link to="/logout">SignOut</Link>
          <Link to="/dashboard">DashBoard</Link>
        </NavBar>
      </Content>
    </Wrapper>
  );
};

export default Header;
