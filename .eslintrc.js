module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-mixed-operators': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
  }
};
