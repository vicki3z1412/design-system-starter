import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global-styles';

const TextHead = styled.h2`
  font-size: 32px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.main};
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <TextHead>Versent</TextHead>
        <p>
          Cloud transformation and automation are vital strategies to maximise
          the growth potential of your business. Investing in innovative
          solutions like live data analysis and artificial intelligence will
          optimise your digital posture and position you to compete in the
          modern economy.
        </p>
      </div>
    </ThemeProvider>
  );
};

export default App;
