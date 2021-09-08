import React from 'react';
import ReactDOM from 'react-dom';

import AcmeValueApp from './application/AcmeValueApp';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-var-requires,import/extensions,import/no-unresolved,global-require
  const { worker } = require('./infrastructure/tests/mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <AcmeValueApp />
  </React.StrictMode>,
  document.getElementById('root')
);
