import * as React from 'react';
import styled from 'styled-components';

import ContractsRouter from '@domain/contracts/ContractsRouter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
`;

const ContractsPage = () => (
  <Container>
    <ContractsRouter />
  </Container>
);

export default ContractsPage;
