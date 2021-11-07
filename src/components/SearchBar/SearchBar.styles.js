import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  max-width: 200px;
`;

export const Icon = styled.span`
  background: var(--main-bg);
  height: 35px;
  min-width: 35px;
  border-radius: 35px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Input = styled.input`
  max-width: 0;
  height: 35px;
  width: 100%;
  border-radius: 35px;
  padding: 0;
  border: none;
  flex: 1;
  margin-right: -35px;
  transition: all 0.3s ease-in;

  ${({ open }) => open && css`
    max-width: 200px;
    padding: 5px 35px 5px 10px;
  `}
`;
