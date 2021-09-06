import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../infrastructure/theme';
import AppShell from './AppShell';

const AcmeValueApp = () => (
  <ThemeProvider theme={theme}>
    <AppShell />
  </ThemeProvider>
);

export default AcmeValueApp;
