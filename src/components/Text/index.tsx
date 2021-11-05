import React from 'react';
import { TextProps, TextVariant } from './types';
import { ParagraphWrapper, LabelWrapper } from './styles';

export const Text: React.VFC<TextProps> = ({ variant = 'body', children, bold }) => {
  let HeadingComponent: keyof JSX.IntrinsicElements = 'h1';
  switch (variant) {
    case TextVariant.H1:
    case TextVariant.H2:
    case TextVariant.H3:
    case TextVariant.H4:
    case TextVariant.H5: {
      HeadingComponent = variant;
      return <HeadingComponent>{children}</HeadingComponent>;
    }
    case TextVariant.Body: {
      return <ParagraphWrapper bold={bold}>{children}</ParagraphWrapper>;
    }
    default:
    case TextVariant.Label: {
      return <LabelWrapper bold={bold}>{children}</LabelWrapper>;
    }
  }
};
