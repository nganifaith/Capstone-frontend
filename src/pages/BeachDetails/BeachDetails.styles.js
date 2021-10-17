import styled from 'styled-components';

export const Wrapper = styled.div`
  width: var(--max-width);
  max-width: 100vw;
  margin: auto;
`;

export const Details = styled.div`
  position: absolute;
  bottom: 5px;
  padding: 20px;
  color: var(--white);
  width: 100%;
  background-image: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent);

  h2 {
    margin: 5px 0;
    text-align: left;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const BeachImage = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  flex-wrap: wrap;

  & > *:not(:first-child) {
    margin-left: 20px;
    position: relative;

    &::after {
      content: '';
      height: 5px;
      width: 5px;
      top: 5px;
      left: -12px;
      border-radius: 5px;
      background: currentColor;
      position: absolute;
    }
  }
`;
