import styled from 'styled-components';

const Input = styled.input<{ error?: string }>`
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fonts.size.regular};
  background-color: ${({ theme }) => theme.colors.grey.dark};
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.text)};
  width: 100%;
  box-sizing: border-box;
`;

export default Input;
