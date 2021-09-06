import styled from 'styled-components';

const Input = styled.input`
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.font.size.regular};
  background-color: ${({ theme }) => theme.colors.grey.dark};
  width: 100%;
  box-sizing: border-box;
`;

export default Input;
