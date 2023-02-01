import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    position: relative;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;

export { GlobalStyles };
