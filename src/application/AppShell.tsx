import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import DashboardContainer from '@ui/templates/DashboardContainer';
import Navbar from '@ui/molecules/Navbar';
import { navRoutes } from './router/routes';
import MainRouter from './router/MainRouter';

const AppShell = () => (
  <Router>
    <Navbar routes={navRoutes} />

    <DashboardContainer>
      <MainRouter />
    </DashboardContainer>
  </Router>
);

export default AppShell;
