module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community'],
  plugins: ['react-native'],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
};
