module.exports = {
    setupFilesAfterEnv: [
        "@testing-library/jest-dom"

    ],
    'roots': [
        '<rootDir>/src/__test__'
    ],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
        "@App/(.*)": "<rootDir>/src/$1",
    },
    testEnvironment: 'jsdom',
  };
