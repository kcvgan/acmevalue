import * as React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const ContractsRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} />
      <Route exact path={`${path}/create`} />
      <Route path={`${path}/:contractId`} />
    </Switch>
  );
};

export default ContractsRouter;
