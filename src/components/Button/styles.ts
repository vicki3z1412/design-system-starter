import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const ButtonWrapper = styled.button<ButtonProps>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  background-color: #dcdcdc;
  color: ${(props) => props.theme.colors.text};

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${(props) => props.theme.colors.main};
          color: #fff;
        `;
      case 'secondary':
        return css`
          color: ${(props) => props.theme.colors.main};
          box-shadow: ${(props) => props.theme.colors.main} 0 0 0 1px inset;
          background-color: #fff;
        `;
      case 'alert':
        return css`
          background-color: ${(props) => props.theme.colors.danger};
          color: #fff;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 8px 15px;
          font-size: 11px;
        `;

      case 'large':
        return css`
          padding: 16px 25px;
          font-size: 16px;
        `;
    }
  }}
  
  ${({ disabled, loading }) =>
    (loading || disabled) &&
    css`
      opacity: 50%;
      cursor: default;
    `}
`;
