import { createGlobalStyle } from 'styled-components';
import StyledReset from 'styled-reset';

export default createGlobalStyle`
  // ${StyledReset};

  // import Open Sans from Google Fonts
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;&display=swap');

  html,
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.default.fontSize};
    min-height: 100vh;
    height: 100%;
    font-weight: ${(props) => props.theme.typography.default.fontWeight};
    line-height: ${(props) => props.theme.typography.default.lineHeight};
    color: ${(props) => props.theme.colors.text};
  }
  p {
    line-height: 1.375rem;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
  
  h1 {
    font-size: ${(props) => props.theme.typography.h1.fontSize};
    font-weight: ${(props) => props.theme.typography.h1.fontWeight};
    font-style: ${(props) => props.theme.typography.h1.fontStyle};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h1.letterSpacing};
  }
  
  h2 {
    font-size: ${(props) => props.theme.typography.h2.fontSize};
    font-weight: ${(props) => props.theme.typography.h2.fontWeight};
    font-style: ${(props) => props.theme.typography.h2.fontStyle};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h2.letterSpacing};
  }
  
  h3 {
    font-size: ${(props) => props.theme.typography.h3.fontSize};
    font-weight: ${(props) => props.theme.typography.h3.fontWeight};
    font-style: ${(props) => props.theme.typography.h3.fontStyle};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h3.letterSpacing};
  } 
  
  h4 {
    font-size: ${(props) => props.theme.typography.h4.fontSize};
    font-weight: ${(props) => props.theme.typography.h4.fontWeight};
    font-style: ${(props) => props.theme.typography.h4.fontStyle};
    line-height: ${(props) => props.theme.typography.h4.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h4.letterSpacing};
  }
  
  h5 {
    font-size: ${(props) => props.theme.typography.h5.fontSize};
    font-weight: ${(props) => props.theme.typography.h5.fontWeight};
    font-style: ${(props) => props.theme.typography.h5.fontStyle};
    line-height: ${(props) => props.theme.typography.h5.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h5.letterSpacing};
  }
`;
