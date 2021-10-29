import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'default' | 'alert';
  disabled?: boolean;
}
