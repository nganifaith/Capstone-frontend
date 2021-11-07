import styled from 'styled-components';
import image from '../../images/background.jpg';

export const Wrapper = styled.div`
  width: 100vw;
  justify-content: center;

  a {
    background-color: #ff5617;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 50px;
    transition-duration: 0.4s;
    margin: 5px;

    :hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

export const Header = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.5)
    ),
    url(${image});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -70px;
  padding-top: 70px;
`;

export const HeaderContent = styled.div`
  max-width: var(--max-width);
  margin: auto;
  text-align: left;
  color: var(--main-bg);
  padding: 70px var(--default-x-padding);

  h1 {
    max-width: 100%;
    width: 250px;
  }

  h4 {
    text-transform: capitalize;
    color: white;
    justify-content: start;
    font-weight: normal;
    max-width: 100%;
    width: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  
  & > div:first-child {
    max-width: var(--max-width);
    padding: 70px var(--default-x-padding) 0;
    margin: auto;
  }

  h2 {
    text-transform: uppercase;
    opacity: 0.5;
    font-size: 12px;
  }
`;

export const StatsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: var(--max-width);
  padding: 0 var(--default-x-padding) 70px;
  flex-wrap: wrap;

  & > * {
    flex: 1;
    margin: 20px;
    text-align: left;
  }
`;

export const Image = styled.img`
  max-width: 550px;
  width: 100%;
  margin-bottom: 10px;
`;
export const VisitContent = styled.div`
  background: #e7f0ff;

  & > div {
    max-width: var(--max-width);
    padding: 70px var(--default-x-padding);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > * {
      flex: 1;
      margin: 20px;
      text-align: right;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background: #f8f7f7;
  overflow: scroll;
  padding: 70px;
`;

export const LastSection = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.25)
    ),
    url(${image});
  align-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
  color: var(--main-bg);
`;
