import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #2F2E41;
    font-family: 'Open Sans', sans-serif;
    
    ul {
      list-style-type: none;
    }

    a {
      text-decoration: none;
    }
  }

  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyles;
