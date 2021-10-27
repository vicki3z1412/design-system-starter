import { createGlobalStyle } from 'styled-components';
import StyledReset from 'styled-reset';

export default createGlobalStyle`
  // ${StyledReset};

  // import Open Sans from Google Fonts
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;&display=swap');

  html,
  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 16px;
    min-height: 100vh;
    height: 100%;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary}
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
