import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all 0.3s linear;

  ${({ scrolled }) => scrolled
    && css`
      background: var(--main-bg);
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
  height: 70px;

  @media only screen and (max-width: 767px) {
    flex-direction: row-reverse;
    padding: 0 20px;
    background: var(--main-bg);
  }
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
      color: var(--white);
    `}
  }

  a:active, a:hover {
    text-decoration: underline;
    font-size: 17px;
  }

  @media only screen and (max-width: 767px) {
    position: fixed;
    top: 70px;
    left: -200px;
    width: 200px;
    background: var(--main-bg);
    height: calc(100vh - 70px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0px 3px 4px 0px rgba(0,0,0, 0.3);
    transition: left 0.3s linear;

    ${({ open }) => open && css`
      left: 0;
    `}

    a {
      width: 100%;
      text-align: left;
      padding: 10px 20px;
      margin: 0;
    }
  }
`;

export const MenuToggler = styled.div`
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;
