const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote2',
  exposes: {
    './Button': './src/Button',
    './RemoteApp': './src/App'
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    }
  },
};
