import { ThemeProvider } from 'styled-components';
import * as React from 'react';

import theme from '@infrastructure/theme';

export const withTheme = (component: React.ReactNode) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
