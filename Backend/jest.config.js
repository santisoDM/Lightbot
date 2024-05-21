module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'json'],
    transformIgnorePatterns: [
      '<rootDir>/node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|react-native-ble-plx)',
    ],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    globals: {
      'babel-jest': {
        presets: ['@babel/preset-env', '@babel/preset-flow'],
        plugins: ['@babel/plugin-transform-flow-strip-types'],
      },
    },
  };
  