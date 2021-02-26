
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  h1 {
    margin: 0;
  }
`;