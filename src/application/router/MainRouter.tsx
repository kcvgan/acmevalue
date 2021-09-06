import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import ContractsPage from '../pages/ContractsPage';
import { CONTRACTS_MAIN_ROUTE } from './routes';

const MainRouter = () => (
  <Router>
    <Switch>
      {/* This redirect to be removed when more dashboards come */}
      <Redirect exact from="/" to="/contracts" />

      <Route path={CONTRACTS_MAIN_ROUTE.path}>
        <ContractsPage />
      </Route>
    </Switch>
  </Router>
);

export default MainRouter;
