import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --grey: #A7A7A7;
    --white: #FFFFFF;
    --blue: #001488;
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