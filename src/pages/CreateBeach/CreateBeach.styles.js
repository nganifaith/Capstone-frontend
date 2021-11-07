import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 10px;

  .Error {
    color: red;
    font-size: 10px;
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

  input, textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    min-height: 200px;
  }
`;

export const Button = styled.button`
  display: block;
  text-align: center;
  padding: 20px;
  width: 300px;
  text-decoration: none;
  background: var(--medGrey);
  color: var(--white);
  border: none;
  cursor: pointer;

  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
