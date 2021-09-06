import * as React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ContractsView from './ContractsView';
import ContractEditor from './ContractEditor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
`;

const ContractsManager = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route exact path={path}>
          <ContractsView />
        </Route>
        <Route exact path={`${path}/create`}>
          <ContractEditor mode="create" />
        </Route>
        <Route path={`${path}/:contractId`}>
          <ContractEditor mode="edit" />
        </Route>
      </Switch>
    </Container>
  );
};

export default ContractsManager;
