import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic Coding', monospace;
  }

`;

export default GlobalStyle;
