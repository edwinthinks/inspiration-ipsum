module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/setup-tests.js'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 35,
      lines: 80,
      functions: 0,
    },
  },
};
