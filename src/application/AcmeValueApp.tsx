import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../infrastructure/theme';

const AcmeValueApp = () => (
  <ThemeProvider theme={theme}>
    <></>
  </ThemeProvider>
);

export default AcmeValueApp;
