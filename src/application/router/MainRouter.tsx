import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import ContractsPage from '../pages/ContractsPage';
import { CONTRACTS_MAIN_ROUTE } from './routes';

const MainRouter = () => (
  <Switch>
    {/* This redirect to be removed when more dashboards come */}
    <Redirect exact from="/" to="/contracts" />

    <Route path={CONTRACTS_MAIN_ROUTE.path}>
      <ContractsPage />
    </Route>
  </Switch>
);

export default MainRouter;
