module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js'],
    testMatch: [
      '**/tests/cjs/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
      'tests/(browser|es|cjs)/utils/.*?',
    ]
};