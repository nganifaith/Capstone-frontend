import styled from 'styled-components';

export const Wrapper = styled.div`
    box-shadow: 0px 0px 10px 1px rgb(220 219 219 / 92%);
    margin: 10px;
    min-width: 400px;
    border-radius: 5px;
    overflow: hidden;

    a {
      text-decoration: none;
    }
 `;

export const Image = styled.img`
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  height: 350px;
  width: 100%;
  
  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  text-align: left;
  padding: 0 10px;
  box-sizing: border-box;
  padding-right: 100px;
  position: relative;

  h1 {
    font-size: 15px;
    margin: 0;
  }

  p {
    margin: 5px 0;
    font-size: 12px;
    color: #000;
    opacity: 0.7;
  }

  i.fav {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 35px;
    color: #000;
    opacity: 0.7;
  }
`;
