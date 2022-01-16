module.exports = {
    setupFilesAfterEnv: [
        "@testing-library/jest-dom"
   
    ],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
    },
    testEnvironment: 'jsdom',
  };