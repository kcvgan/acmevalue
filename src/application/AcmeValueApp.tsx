import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../infrastructure/theme';
import AppShell from './AppShell';

const GlobalStyles = createGlobalStyle`
  body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      background-color: #292B35;
      color: #EAEAEB;
    }
`;

const AcmeValueApp = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppShell />
  </ThemeProvider>
);

export default AcmeValueApp;
