module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
};
