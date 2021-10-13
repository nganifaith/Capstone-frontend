import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg: #eeedee;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --max-width: 1224px;
    --default-x-padding: 50px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
     }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
     }
  }
`;

export default GlobalStyles;
