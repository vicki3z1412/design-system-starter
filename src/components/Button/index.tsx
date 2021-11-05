import React from 'react';
import { ButtonProps } from './types';
import { ButtonWrapper } from './styles';

export const Button: React.VFC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonWrapper data-testid="button" {...props}>
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium'
};
