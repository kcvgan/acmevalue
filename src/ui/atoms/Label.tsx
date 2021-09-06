import styled from 'styled-components';

const Label = styled.label`
  padding: 0.8rem 0 0.2rem;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fonts.size.regular};
`;

export default Label;
