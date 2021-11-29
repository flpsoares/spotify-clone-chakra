module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': [0],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-unused-vars': [0],
    camelcase: 'off',
    'no-useless-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off'
  }
}
