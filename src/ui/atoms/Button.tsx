import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  cursor: pointer;
  padding: ${({ theme }) =>
    css`
      ${theme.spacing.sm} ${theme.spacing.md}
    `};
  font-size: ${({ theme }) => theme.fonts.size.regular}

  height: 44px;

  opacity: 1;

  &:hover {
    transition: 0.1s opacity linear;
    opacity: 0.8;
  }
`;
