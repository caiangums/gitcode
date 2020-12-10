module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/constants',
          _interfaces: './src/interfaces',
          _middlewares: './src/middlewares',
          _screens: './src/screens',
          _services: './src/services',
          _store: './src/store',
          _utils: './src/utils',
        },
      },
    },
  },
};
