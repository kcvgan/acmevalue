import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnstyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: ${(props) => props.theme.colors.textDark};
`;

export default UnstyledLink;
