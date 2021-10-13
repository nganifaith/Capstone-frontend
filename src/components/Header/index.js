import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import { useDispatch } from 'react-redux';
import {
  Content, MenuToggler, NavBar, Wrapper,
} from './Header.styles';
import useAuth from '../../hooks/useAuth';
import SearchBar from '../SearchBar';
import { setSearchTerm } from '../../actions';

const Header = () => {
  const [scrolled, setScrolled] = useState();
  const [open, setOpen] = useState();
  const location = useLocation();
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    function checkScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [scrolled]);

  return (
    <Wrapper scrolled={scrolled}>
      <Content>
        <NavBar open={open} onClick={() => setOpen(false)} home={location.pathname === '/'}>
          <Link to="/">Home</Link>
          {!currentUser && <Link to="/signup">Sign Up</Link>}
          {!currentUser && <Link to="/login">Log In</Link>}
          <Link to="/dashboard">Listings</Link>
          {currentUser && <Link to="/dashboard?favourites=yes">Favourites</Link>}
          {currentUser && <Link to="/logout">Sign Out</Link>}
        </NavBar>
        {location.pathname === '/dashboard' && <SearchBar setSearchTerm={(value) => dispatch(setSearchTerm(value))} />}
        <MenuToggler onClick={() => setOpen(!open)}>
          <i className="material-icons">menu</i>
        </MenuToggler>
      </Content>
    </Wrapper>
  );
};

export default Header;
