import * as React from 'react';
import { Provider } from 'react-redux';

import rootStore from '@application/store/rootStore';

export const reduxWrapper: React.FC = ({ children }) => (
  <Provider store={rootStore}>{children}</Provider>
);
