module.exports = {
  collectCoverageFrom: ['src/app/components/*/*.jsx', 'src/app/components/*/*.js'],
  modulePathIgnorePatterns: ['src/app/*.jsx', 'src/app/components/*/index.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.js'
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
