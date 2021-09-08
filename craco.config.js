// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@application': path.resolve(__dirname, 'src/application/'),
      '@domain': path.resolve(__dirname, 'src/domain/'),
      '@infrastructure': path.resolve(__dirname, 'src/infrastructure/'),
      '@ui': path.resolve(__dirname, 'src/ui/'),
    },
  },
};
