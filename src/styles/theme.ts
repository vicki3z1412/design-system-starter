import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    main: '#98CA3E',
    secondary: '#122D35',
  },
  typography: {
    fontFamily: 'Open sans, sans-serif',
    default: {
      fontSize: '1rem',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '1.375rem',
    },
    h1: {
      fontSize: '3.25rem',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: '3.875rem',
      letterSpacing: '0.01em;',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: '3.275rem',
      letterSpacing: '0.01em;',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: '2.375rem',
    },
    h4: {
      fontSize: '2em',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: '48px',
    },
    h5: {
      fontSize: '2em',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: '48px',
    },
    label: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '1.075rem',
    },
  },
};

export default theme;
