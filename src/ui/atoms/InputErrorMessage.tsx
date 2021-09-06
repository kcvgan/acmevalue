import * as React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.error};
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.regular};
  height: 20px;
`;

const InputErrorMessage: React.FC = ({ children }) => (
  <ErrorMessage>{children}</ErrorMessage>
);

export default InputErrorMessage;
