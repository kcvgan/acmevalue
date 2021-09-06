import * as React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

import ContractsView from './ContractsView';
import ContractEditor from './ContractEditor';

const ContractsRouter = () => {
  const { path } = useRouteMatch();

  return (
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
  );
};

export default ContractsRouter;
