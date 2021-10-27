import React from 'react';
import { TextProps, TextVariant } from './types';

export const Text: React.VFC<TextProps> = ({ variant = 'body', children }) => {
  let TextComponent: keyof JSX.IntrinsicElements = 'p';
  switch (variant) {
    case TextVariant.H1:
    case TextVariant.H2:
    case TextVariant.H3:
    case TextVariant.H4:
    case TextVariant.H5: {
      TextComponent = variant;
      break;
    }
    default:
    case TextVariant.Body: {
      TextComponent = 'p';
      break;
    }
    case TextVariant.Label: {
      TextComponent = 'span';
      break;
    }
  }

  return <TextComponent>{children}</TextComponent>;
};
