import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './index';
import theme from '../../styles/theme';
import 'jest-styled-components';

describe('Button', () => {
  const buttonText = 'Confirm';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderButton = ({ myTheme, ...props }) =>
    render(
      <ThemeProvider theme={myTheme}>
        <Button {...props}>{buttonText}</Button>
      </ThemeProvider>
    );

  it('should render default button style with size medium when no variant is passed', () => {
    const { container } = renderButton({ myTheme: theme });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyle('background-color: #DCDCDC');
    expect(button).toHaveStyleRule('color', theme.colors.text);
  });

  it('should render default button style with size small when size "small" is passed', () => {
    const { container } = renderButton({ myTheme: theme, size: 'small' });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyle('background-color: #DCDCDC');
    expect(button).toHaveStyleRule('color', theme.colors.text);
    expect(button).toHaveStyleRule('padding', '8px 15px');
    expect(button).toHaveStyleRule('font-size', '11px');
  });

  it('should render default button style with size small when size "large" is passed', () => {
    const { container } = renderButton({ myTheme: theme, size: 'large' });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyle('background-color: #DCDCDC');
    expect(button).toHaveStyleRule('color', theme.colors.text);
    expect(button).toHaveStyleRule('padding', '16px 25px');
    expect(button).toHaveStyleRule('font-size', '16px');
  });

  it('should render primary button style with size medium when variant "primary" is passed', () => {
    const { container } = renderButton({ myTheme: theme, variant: 'primary' });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyleRule('background-color', theme.colors.main);
    expect(button).toHaveStyleRule('color', '#fff');
  });

  it('should render secondary button style with size medium when variant "secondary" is passed', () => {
    const { container } = renderButton({
      myTheme: theme,
      variant: 'secondary'
    });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyleRule('background-color', '#fff');
    expect(button).toHaveStyleRule('color', theme.colors.main);
    expect(button).toHaveStyleRule('box-shadow', `${theme.colors.main} 0 0 0 1px inset`);
  });

  it('should render alert button style with size medium when variant "alert" is passed', () => {
    const { container } = renderButton({ myTheme: theme, variant: 'alert' });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyleRule('background-color', theme.colors.danger);
    expect(button).toHaveStyleRule('color', '#fff');
  });

  it('should render primary button style with disabled styled when disabled option is true', () => {
    const { container } = renderButton({ myTheme: theme, variant: 'primary', disabled: true });
    const button = screen.getByTestId('button');
    expect(button).toHaveStyleRule('opacity', '50%');
    expect(button).toHaveStyleRule('cursor', 'default');
  });

  it('should render primary button style with loading text and styled when loading option is true', () => {
    const { container } = renderButton({ myTheme: theme, variant: 'primary', loading: true });
    const button = screen.getByText('Loading...');
    expect(button).toHaveStyleRule('opacity', '50%');
    expect(button).toHaveStyleRule('cursor', 'default');
  });
});
