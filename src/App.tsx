import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const TextHead = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.color.primary};
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TextHead>Versent</TextHead>
      </div>
    </ThemeProvider>
  );
};

export default App;
