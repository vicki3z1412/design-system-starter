import styled from 'styled-components';

export const ButtonWrapper = styled.button`
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
  background: ${(props) => props.theme.colors.main};
  color: #fff;
`;
