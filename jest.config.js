module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
