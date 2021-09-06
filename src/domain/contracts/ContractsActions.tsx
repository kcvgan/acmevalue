import * as React from 'react';
import styled from 'styled-components';

import Header from '../../ui/atoms/Header';
import { Button } from '../../ui/atoms/Button';
import UnstyledLink from '../../ui/atoms/UnstyledLink';
import { CONTRACTS_ROUTES } from '../../application/router/routes';

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContractsActions = () => (
  <StyledHeader>
    Contracts
    <UnstyledLink
      to={CONTRACTS_ROUTES.create.path}
      data-cy="add-contract-button"
    >
      <Button>Add</Button>
    </UnstyledLink>
  </StyledHeader>
);

export default ContractsActions;
