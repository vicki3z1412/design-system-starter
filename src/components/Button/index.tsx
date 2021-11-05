import React from 'react';
import { ButtonProps } from './types';
import { ButtonWrapper } from './styles';

export const Button: React.VFC<ButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <ButtonWrapper data-testid="button" disabled={disabled} {...props}>
      {props.loading ? 'Loading...' : children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
  disabled: false,
  loading: false
};
