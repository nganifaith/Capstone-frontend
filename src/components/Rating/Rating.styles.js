import styled, { css } from 'styled-components';

const RatingWrapper = styled.div`
  display: flex;

  i {
    color: #ccc;
    font-size: 18px;
  }

  i.Active {
    color: #ffa013;
  }

  ${({ input }) => input && css`
    margin: 10px 0;
    i {
      cursor: pointer;
    }
  `}
`;

export default RatingWrapper;
