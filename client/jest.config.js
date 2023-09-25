const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig')

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  transform: {
    "\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(scss|css)$": "jest-transform-stub",
    '\\.(jpg|jpeg|png|gif)$': 'jest-transform-stub',
  },
}
