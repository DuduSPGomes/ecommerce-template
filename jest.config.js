module.exports = {
    setupFilesAfterEnv: [
        "@testing-library/jest-dom"

    ],
    'roots': [
        '<rootDir>/src'
    ],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
        "@App/(.*)": "<rootDir>/src/$1",
    },
    testEnvironment: 'jsdom',
  };
