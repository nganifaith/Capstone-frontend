import styled from 'styled-components';
import image from '../../images/background.jpg';

export const Wrapper = styled.div`
  height: 100vh;
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
  background-image: url(${image}),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95), orange);
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  justify-content: center;
  align-items: start;
  padding: 5px;
  max-width: 720px;

  h4 {
    text-transform: capitalize;
    color: white;
    justify-content: start;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: black;

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
`;

export const Image = styled.img`
  width: 45%;
  margin-bottom: 10px;
`;
export const VisitContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: #e7f0ff;
`;

export const UserSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background: #f8f7f7;
  overflow: scroll;
`;
