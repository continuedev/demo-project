/**
 * ESLint configuration for Continue Workflows Demo
 * Used in Workflow #2 for code cleanup
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier' // Disables ESLint rules that conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Code quality rules
    'no-console': 'warn', // Console.logs should be removed
    'no-unused-vars': 'off', // Use TypeScript's rule instead
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    
    // Style rules (these will be auto-fixed)
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    
    // Best practices
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'no-throw-literal': 'error',
    'no-return-await': 'warn'
  }
};