import React from 'react';
import { ButtonProps } from './types';
import { ButtonWrapper } from './styles';

export const Button: React.VFC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
