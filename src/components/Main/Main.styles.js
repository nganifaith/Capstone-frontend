import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Content = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: nowrap;
`;
