module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: ['**/src/**/__tests__/**/*.[jt]s?(x)'],
};
