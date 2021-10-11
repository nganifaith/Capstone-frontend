import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/stats.png';
import nature from '../../images/nature.png';
import {
  Content,
  Header,
  HeaderContent,
  Image,
  StatsContent,
  VisitContent,
  Wrapper,
} from './LandingPage.styles';

const LandingPage = () => (
  <Wrapper>
    <Header>
      <HeaderContent>
        <h1> Reconnect With Nature</h1>
        <h4>
          There’s a whole world out there, right outside your window. You’d be a
          fool to miss it.
        </h4>
        <Link to="/login">Start for free</Link>
      </HeaderContent>
    </Header>
    <Content>
      <div>
        <h2>Best way to spend you Vacation</h2>
        <h1>Comfortable Sites to visit</h1>
      </div>

      <StatsContent>
        <div>
          <h1>All Information you need </h1>
          <p>
            Our yearly visits stats. Focusing a `background-image` on a Precise
            Location with Percentages
          </p>
          <Link to="/login">Start for free</Link>
        </div>
        <Image src={img} />
      </StatsContent>
      <VisitContent>
        <Image src={nature} />
        <div>
          <h1>Relax with a beautiful view </h1>
          <p>
            Our yearly visits stats. Focusing a `background-image` on a Precise
            Location with Percentages
          </p>
          <Link to="/login">Start for free</Link>
        </div>
      </VisitContent>
    </Content>
  </Wrapper>
);

export default LandingPage;
