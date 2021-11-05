import styled, { css } from 'styled-components';
import { TextProps } from './types';

export const ParagraphWrapper = styled.p<TextProps>`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

export const LabelWrapper = styled.span<TextProps>`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;
