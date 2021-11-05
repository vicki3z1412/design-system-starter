import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global-styles';
import { Text } from './components/Text';
import { TextVariant } from './components/Text/types';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Text variant={TextVariant.H1}>Header</Text>
        <Text variant={TextVariant.H2}>SubHeader</Text>
        <Text>
          Cloud transformation and automation are vital strategies to maximise the growth potential
          of your business. Investing in innovative solutions like live data analysis and artificial
          intelligence will optimise your digital posture and position you to compete in the modern
          economy.
        </Text>
      </div>
    </ThemeProvider>
  );
};

export default App;
