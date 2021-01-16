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

    --fontMedium: 'Founders Grotesk Medium', sans-serif;
    --fontRegular: 'Founders Grotesk Regular', sans-serif;
    --fontSemibold: 'Founders Grotesk Semibold', sans-serif;
  }

  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .font-med {
    font-family: var(--fontMedium);
  }

  .font-reg {
    font-family: var(--fontRegular);
  }
  
  .font-semibold {
    font-family: var(--fontSemibold);
  }
  
`;

export default GlobalStyles;