const jestConfig = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'node'],
  collectCoverageFrom: ['src/**/*.js'],
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

module.exports = jestConfig;
