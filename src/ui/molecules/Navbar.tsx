import * as React from 'react';
import styled from 'styled-components';

import UnstyledLink from '../atoms/UnstyledLink';

export type Route = {
  path: string;
  name: string;
};

const StyledNav = styled.nav`
  width: 100%;
  height: 24px;

  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.textDark};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  padding: ${({ theme }) => theme.spacing.xl};
`;

type NavbarProps = {
  routes: Route[];
};

const Navbar = ({ routes }: NavbarProps) => (
  <StyledNav>
    {routes.map((route) => (
      <UnstyledLink to={route.path}>{route.name}</UnstyledLink>
    ))}
  </StyledNav>
);

export default Navbar;
