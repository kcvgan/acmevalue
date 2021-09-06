import styled from 'styled-components';

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.dark};
  color: ${({ theme }) => theme.colors.textDark};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: 4px;
`;

export default Header;
