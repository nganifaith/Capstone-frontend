import React from 'react';
import { Link } from 'react-router-dom';

import {
  Content, Logo, NavBar, Wrapper,
} from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Logo />
      <NavBar>
        <Link to="/signup">SignUp</Link>
        <Link to="/login">LogIn</Link>

        <Link to="/logout">SignOut</Link>
        <Link to="/dashboard">DashBoard</Link>
      </NavBar>
    </Content>
  </Wrapper>
);

export default Header;
