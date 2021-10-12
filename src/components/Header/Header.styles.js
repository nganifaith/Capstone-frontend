import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all 0.3s linear;

  ${({ scrolled }) => scrolled
    && css`
      background: var(--white);
      box-shadow: 0 0px 6px 0 grey;

      a {
        color: #000 !important;
      }
    `};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: auto;
  padding: 0 var(--default-x-padding);
`;
export const Logo = styled.img`
  height: 70px;
  object-fit: contain;
`;
export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    ${({ home }) => home && css`
      color: #fff;
    `}
  }

  a:active, a:hover {
    text-decoration: underline;
    font-size: 17px;
  }
`;
