import React from 'react';
import Content from './Footer.styles';

const year = new Date().getFullYear();

const Footer = () => (
  <Content>
    <p>
      &copy;
      {' '}
      {year}
      - All Rights Reserved
    </p>
  </Content>
);

export default Footer;
