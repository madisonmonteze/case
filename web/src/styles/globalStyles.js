import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --red: #CE0924;
    --green: #054706;
    --brightGreen: #009E02;
    --yellow: #FDBE2C;
    --blue: #0035E1;
  }

  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
`;

export default GlobalStyles;