/**
 * Jest configuration for Continue Workflows Demo
 * Configured to work with TypeScript and show coverage reports
 */

module.exports = {
  // Use ts-jest to handle TypeScript files
  preset: 'ts-jest',
  
  // Run tests in Node environment
  testEnvironment: 'node',
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  
  // Module file extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
  // Coverage configuration
  collectCoverage: false, // Set to true when running coverage
  collectCoverageFrom: [
    'src/**/*.ts',
    'api/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/__tests__/**'
  ],
  
  // Coverage thresholds (currently set low since we have missing tests)
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  
  // Coverage report formats
  coverageReporters: ['text', 'lcov', 'html'],
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Verbose output for better debugging
  verbose: true,
  
  // Transform files
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: {
        // Override some tsconfig settings for tests
        strict: false, // Be less strict in tests
        noUnusedLocals: false,
        noUnusedParameters: false
      }
    }]
  }
};